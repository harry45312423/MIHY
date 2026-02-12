import type { SearchResult } from '@/types/knowledge';
import type { Escalation } from '@/types/escalation';
import { getServiceClient } from './supabase';
import { ingestAdminAnswer } from './adminKnowledge';
import { sendEscalationResolvedEmail } from './email';

/** Returns true if the search results indicate the bot can't answer */
export function shouldEscalate(searchResults: SearchResult[]): boolean {
  return searchResults.length === 0;
}

/** SHA-256 hash of normalized question for deduplication */
async function hashQuestion(question: string): Promise<string> {
  const normalized = question.trim().toLowerCase().replace(/\s+/g, ' ');
  const data = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Create or increment an escalation (dedup by question_hash in pending status) */
export async function createEscalation(
  question: string,
  searchResults: SearchResult[],
  email?: string
): Promise<void> {
  const supabase = getServiceClient();
  const questionHash = await hashQuestion(question);
  const topSimilarity =
    searchResults.length > 0
      ? Math.max(...searchResults.map((r) => r.similarity))
      : 0;

  const searchSummary = searchResults.slice(0, 3).map((r) => ({
    pageTitle: r.pageTitle,
    similarity: r.similarity,
    category: r.category,
  }));

  // Try to increment hit_count on existing pending escalation with same hash
  const { data: existing } = await supabase
    .from('escalations')
    .select('id, hit_count')
    .eq('question_hash', questionHash)
    .eq('status', 'pending')
    .single();

  if (existing) {
    const updates: Record<string, unknown> = { hit_count: existing.hit_count + 1 };
    if (email) updates.user_email = email;
    await supabase
      .from('escalations')
      .update(updates)
      .eq('id', existing.id);
    return;
  }

  // Insert new escalation
  await supabase.from('escalations').insert({
    user_question: question,
    question_hash: questionHash,
    search_results: searchSummary,
    top_similarity: topSimilarity,
    status: 'pending',
    hit_count: 1,
    ...(email && { user_email: email }),
  });
}

function mapRow(row: Record<string, unknown>): Escalation {
  return {
    id: row.id as string,
    userQuestion: row.user_question as string,
    questionHash: row.question_hash as string,
    botResponse: row.bot_response as string | null,
    searchResults: (row.search_results ?? []) as Escalation['searchResults'],
    topSimilarity: row.top_similarity as number,
    status: row.status as Escalation['status'],
    hitCount: row.hit_count as number,
    adminAnswer: row.admin_answer as string | null,
    adminName: row.admin_name as string | null,
    knowledgeChunkId: row.knowledge_chunk_id as string | null,
    category: row.category as string,
    userEmail: row.user_email as string | null,
    resolvedAt: row.resolved_at as string | null,
    createdAt: row.created_at as string,
  };
}

export async function getEscalations(
  status?: string,
  page = 1,
  limit = 20
): Promise<{ data: Escalation[]; total: number }> {
  const supabase = getServiceClient();
  const offset = (page - 1) * limit;

  let query = supabase
    .from('escalations')
    .select('*', { count: 'exact' });

  if (status) {
    query = query.eq('status', status);
  }

  const { data, count, error } = await query
    .order('hit_count', { ascending: false })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    throw new Error(`getEscalations failed: ${error.message}`);
  }

  return {
    data: (data ?? []).map(mapRow),
    total: count ?? 0,
  };
}

export async function getEscalationById(
  id: string
): Promise<Escalation | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from('escalations')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return mapRow(data);
}

export async function getPendingCount(): Promise<number> {
  const supabase = getServiceClient();
  const { count, error } = await supabase
    .from('escalations')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending');

  if (error) return 0;
  return count ?? 0;
}

export async function resolveEscalation(
  id: string,
  answer: string,
  category: string,
  adminName: string
): Promise<{ success: boolean; alreadyResolved?: boolean; error?: string }> {
  const supabase = getServiceClient();

  // Optimistic concurrency: only resolve if still pending
  const { data, error } = await supabase
    .from('escalations')
    .update({
      admin_answer: answer,
      admin_name: adminName,
      category,
      status: 'resolved',
      resolved_at: new Date().toISOString(),
    })
    .eq('id', id)
    .eq('status', 'pending')
    .select()
    .single();

  if (error) {
    // Real DB error vs no matching row (already resolved/dismissed)
    if (error.code === 'PGRST116') {
      // PostgREST: "JSON object requested, multiple (or no) rows returned"
      return { success: false, alreadyResolved: true };
    }
    throw new Error(`resolveEscalation DB error: ${error.message}`);
  }

  if (!data) {
    return { success: false, alreadyResolved: true };
  }

  const escalation = mapRow(data);

  // Ingest admin answer into knowledge base
  let chunkId: string;
  try {
    chunkId = await ingestAdminAnswer(
      escalation.id,
      escalation.userQuestion,
      answer,
      category
    );
  } catch (err) {
    // Rollback: revert to pending so admin can retry
    console.error('ingestAdminAnswer failed, rolling back:', err);
    await supabase
      .from('escalations')
      .update({ status: 'pending', admin_answer: null, admin_name: null, resolved_at: null })
      .eq('id', id);
    return { success: false, error: '지식 베이스 저장에 실패했습니다. 다시 시도해주세요.' };
  }

  // Store chunk ID reference
  await supabase
    .from('escalations')
    .update({ knowledge_chunk_id: chunkId })
    .eq('id', id);

  // Send email notification if user provided email
  if (escalation.userEmail) {
    await sendEscalationResolvedEmail(
      escalation.userEmail,
      escalation.userQuestion,
      answer
    ).catch((err) => console.error('Email send failed:', err));
  }

  // Resolve other pending escalations with the same hash
  await supabase
    .from('escalations')
    .update({
      admin_answer: answer,
      admin_name: adminName,
      category,
      status: 'resolved',
      resolved_at: new Date().toISOString(),
      knowledge_chunk_id: chunkId,
    })
    .eq('question_hash', escalation.questionHash)
    .eq('status', 'pending');

  return { success: true };
}

export async function getNextPendingId(
  excludeId: string
): Promise<string | null> {
  const supabase = getServiceClient();
  const { data } = await supabase
    .from('escalations')
    .select('id')
    .eq('status', 'pending')
    .neq('id', excludeId)
    .order('hit_count', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  return data?.id ?? null;
}

export async function dismissEscalation(
  id: string
): Promise<{ success: boolean }> {
  const supabase = getServiceClient();

  const { error } = await supabase
    .from('escalations')
    .update({ status: 'dismissed' })
    .eq('id', id)
    .eq('status', 'pending');

  return { success: !error };
}
