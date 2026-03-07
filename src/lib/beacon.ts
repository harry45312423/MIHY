import type { BeaconRequest, BeaconRequestStatus } from '@/types/beacon';
import { getServiceClient } from './supabase';

function mapRow(row: Record<string, unknown>): BeaconRequest {
  return {
    id: row.id as string,
    studentName: row.student_name as string,
    studentPhone: row.student_phone as string,
    requestDate: row.request_date as string,
    status: row.status as BeaconRequestStatus,
    adminName: row.admin_name as string | null,
    adminNote: row.admin_note as string | null,
    processedAt: row.processed_at as string | null,
    completedAt: row.completed_at as string | null,
    createdAt: row.created_at as string,
  };
}

export async function createBeaconRequest(
  name: string,
  phone: string,
  date: string
): Promise<{ success: boolean; duplicate?: boolean }> {
  const supabase = getServiceClient();

  // 중복 체크: 같은 이름+전화+날짜+pending이면 거부
  const { data: existing } = await supabase
    .from('beacon_requests')
    .select('id')
    .eq('student_name', name)
    .eq('student_phone', phone)
    .eq('request_date', date)
    .eq('status', 'pending')
    .limit(1)
    .maybeSingle();

  if (existing) {
    return { success: false, duplicate: true };
  }

  const { error } = await supabase.from('beacon_requests').insert({
    student_name: name,
    student_phone: phone,
    request_date: date,
  });

  if (error) {
    throw new Error(`createBeaconRequest failed: ${error.message}`);
  }

  return { success: true };
}

export async function getBeaconRequests(
  status?: string,
  page = 1,
  limit = 20
): Promise<{ data: BeaconRequest[]; total: number }> {
  const supabase = getServiceClient();
  const offset = (page - 1) * limit;

  let query = supabase
    .from('beacon_requests')
    .select('*', { count: 'exact' });

  if (status) {
    query = query.eq('status', status);
  }

  const { data, count, error } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    throw new Error(`getBeaconRequests failed: ${error.message}`);
  }

  return {
    data: (data ?? []).map(mapRow),
    total: count ?? 0,
  };
}

export async function getBeaconRequestById(
  id: string
): Promise<BeaconRequest | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from('beacon_requests')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return mapRow(data);
}

export async function updateBeaconStatus(
  id: string,
  status: BeaconRequestStatus,
  adminName?: string,
  adminNote?: string
): Promise<{ success: boolean }> {
  const supabase = getServiceClient();

  const updates: Record<string, unknown> = { status };
  if (adminName) updates.admin_name = adminName;
  if (adminNote !== undefined) updates.admin_note = adminNote;
  if (status === 'processed') updates.processed_at = new Date().toISOString();
  if (status === 'completed') updates.completed_at = new Date().toISOString();

  const { error } = await supabase
    .from('beacon_requests')
    .update(updates)
    .eq('id', id);

  return { success: !error };
}

export async function getPendingBeaconCount(): Promise<number> {
  const supabase = getServiceClient();
  const { count, error } = await supabase
    .from('beacon_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending');

  if (error) return 0;
  return count ?? 0;
}

export async function reportConsentIssue(
  studentName: string,
  studentPhone: string
): Promise<{ success: boolean; notFound?: boolean }> {
  const supabase = getServiceClient();

  // 가장 최근 processed 요청을 찾아서 consent_issue로 변경
  const { data } = await supabase
    .from('beacon_requests')
    .select('id')
    .eq('student_name', studentName)
    .eq('student_phone', studentPhone)
    .eq('status', 'processed')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!data) {
    return { success: false, notFound: true };
  }

  const { error } = await supabase
    .from('beacon_requests')
    .update({ status: 'consent_issue' })
    .eq('id', data.id);

  return { success: !error };
}
