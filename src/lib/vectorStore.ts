import type { DocumentChunk, SearchOptions, SearchResult } from '@/types/knowledge';
import { embedQuery } from './embeddings';
import { getServiceClient } from './supabase';

export async function searchKnowledge(
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> {
  const {
    category,
    matchThreshold = 0.3,
    matchCount = 10,
  } = options;

  const queryEmbedding = await embedQuery(query);
  const supabase = getServiceClient();

  const { data, error } = await supabase.rpc('match_chunks', {
    query_embedding: queryEmbedding,
    match_threshold: matchThreshold,
    match_count: matchCount,
    filter_category: category ?? null,
  });

  if (error) {
    console.error('Vector search failed');
    return [];
  }

  const results = (data ?? []) as SearchResult[];

  // Apply re-ranking
  return rerank(results, query).slice(0, 5);
}

function rerank(results: SearchResult[], query: string): SearchResult[] {
  const queryTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  return results
    .map((result) => {
      let score = result.similarity;

      // Boost: keyword overlap
      const contentLower = result.content.toLowerCase();
      const keywordHits = queryTerms.filter((term) =>
        contentLower.includes(term)
      ).length;
      score += (keywordHits / Math.max(queryTerms.length, 1)) * 0.15;

      // Boost: heading context match
      if (result.headingContext) {
        const headingLower = result.headingContext.toLowerCase();
        const headingHits = queryTerms.filter((t) =>
          headingLower.includes(t)
        ).length;
        score += (headingHits / Math.max(queryTerms.length, 1)) * 0.1;
      }

      return { ...result, similarity: score };
    })
    .sort((a, b) => b.similarity - a.similarity);
}

export async function upsertChunks(
  chunks: DocumentChunk[]
): Promise<void> {
  const supabase = getServiceClient();

  // Process in batches of 100
  for (let i = 0; i < chunks.length; i += 100) {
    const batch = chunks.slice(i, i + 100).map((chunk) => ({
      id: chunk.id,
      page_id: chunk.pageId,
      page_title: chunk.pageTitle,
      chunk_index: chunk.chunkIndex,
      content: chunk.content,
      heading_context: chunk.headingContext,
      category: chunk.category,
      subcategory: chunk.subcategory ?? null,
      tags: chunk.tags,
      token_count: chunk.tokenCount,
      embedding: chunk.embedding,
      notion_url: chunk.notionUrl,
      last_synced: chunk.lastSynced,
    }));

    const { error } = await supabase
      .from('knowledge_chunks')
      .upsert(batch, { onConflict: 'page_id,chunk_index' });

    if (error) {
      console.error('Upsert failed');
      throw error;
    }
  }
}

export async function deletePageChunks(pageId: string): Promise<void> {
  const supabase = getServiceClient();
  const { error } = await supabase
    .from('knowledge_chunks')
    .delete()
    .eq('page_id', pageId);

  if (error) {
    console.error('Delete failed');
    throw error;
  }
}

export async function getChunkCount(): Promise<number> {
  const supabase = getServiceClient();
  const { count, error } = await supabase
    .from('knowledge_chunks')
    .select('*', { count: 'exact', head: true });

  if (error) return 0;
  return count ?? 0;
}
