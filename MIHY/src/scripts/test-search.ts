import 'dotenv/config';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

async function test() {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: '검색어: 장학금 얼마 받을 수 있어?',
  });
  const embedding = res.data[0].embedding;
  console.log('임베딩 차원:', embedding.length);

  const { data, error } = await supabase.rpc('match_chunks', {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 5,
    filter_category: null,
  });

  if (error) {
    console.error('RPC 에러:', error);
    return;
  }

  console.log('검색 결과 수:', data?.length);
  for (const r of data || []) {
    console.log('---');
    console.log('pageTitle:', r.pageTitle);
    console.log('similarity:', r.similarity);
    console.log('category:', r.category);
    console.log('content 앞 150자:', r.content?.substring(0, 150));
  }
}
test();
