import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;
let _serviceClient: SupabaseClient | null = null;

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error('Supabase URL and Anon Key are required');
  }
  return { url, anonKey };
}

/** Client-side Supabase client (anon key, RLS enforced) */
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const { url, anonKey } = getEnv();
    _supabase = createClient(url, anonKey);
  }
  return _supabase;
}

/** Server-side Supabase client (service role, bypasses RLS) */
export function getServiceClient(): SupabaseClient {
  if (!_serviceClient) {
    const { url } = getEnv();
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for server operations');
    }
    _serviceClient = createClient(url, serviceKey);
  }
  return _serviceClient;
}
