/**
 * Run escalations table migration via Supabase service_role.
 * Usage: npx tsx src/scripts/migrate-escalations.ts
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log('Creating escalations table...');

  const { error: tableError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS escalations (
        id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_question    TEXT NOT NULL,
        question_hash    TEXT NOT NULL,
        bot_response     TEXT,
        search_results   JSONB DEFAULT '[]',
        top_similarity   FLOAT DEFAULT 0,
        status           TEXT NOT NULL DEFAULT 'pending'
                          CHECK (status IN ('pending', 'resolved', 'dismissed')),
        hit_count        INT NOT NULL DEFAULT 1,
        admin_answer     TEXT,
        admin_name       TEXT,
        knowledge_chunk_id TEXT,
        category         TEXT DEFAULT '일반',
        resolved_at      TIMESTAMPTZ,
        created_at       TIMESTAMPTZ DEFAULT now()
      );
    `,
  });

  if (tableError) {
    // exec_sql might not exist, try raw query via PostgREST
    console.log('exec_sql RPC not available, checking if table already exists...');

    const { data, error: checkError } = await supabase
      .from('escalations')
      .select('id')
      .limit(0);

    if (!checkError) {
      console.log('escalations table already exists!');
      return;
    }

    console.error(
      'Table does not exist and cannot create via RPC.',
      'Please run the following SQL in Supabase Dashboard > SQL Editor:',
    );
    console.log('\n--- Copy and paste this SQL ---\n');
    console.log(`
CREATE TABLE IF NOT EXISTS escalations (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_question    TEXT NOT NULL,
  question_hash    TEXT NOT NULL,
  bot_response     TEXT,
  search_results   JSONB DEFAULT '[]',
  top_similarity   FLOAT DEFAULT 0,
  status           TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending', 'resolved', 'dismissed')),
  hit_count        INT NOT NULL DEFAULT 1,
  admin_answer     TEXT,
  admin_name       TEXT,
  knowledge_chunk_id TEXT,
  category         TEXT DEFAULT '일반',
  resolved_at      TIMESTAMPTZ,
  created_at       TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_escalations_status ON escalations(status);
CREATE INDEX IF NOT EXISTS idx_escalations_created ON escalations(created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS idx_escalations_pending_hash
  ON escalations(question_hash) WHERE status = 'pending';

ALTER TABLE escalations ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_chunks ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'seed';
    `);
    console.log('\n--- End of SQL ---\n');
    process.exit(1);
  }

  console.log('Table created successfully!');

  // Create indexes
  console.log('Creating indexes...');
  for (const sql of [
    `CREATE INDEX IF NOT EXISTS idx_escalations_status ON escalations(status)`,
    `CREATE INDEX IF NOT EXISTS idx_escalations_created ON escalations(created_at DESC)`,
    `CREATE UNIQUE INDEX IF NOT EXISTS idx_escalations_pending_hash ON escalations(question_hash) WHERE status = 'pending'`,
    `ALTER TABLE escalations ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE knowledge_chunks ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'seed'`,
  ]) {
    const { error } = await supabase.rpc('exec_sql', { sql });
    if (error) console.warn('Index/alter warning:', error.message);
  }

  console.log('Migration complete!');
}

migrate().catch(console.error);
