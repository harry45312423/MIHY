-- Escalations table: tracks questions the bot couldn't answer
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

-- Add user_email column for notification on resolution
ALTER TABLE escalations ADD COLUMN IF NOT EXISTS user_email TEXT;

-- Add source column to knowledge_chunks for tracking origin
ALTER TABLE knowledge_chunks ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'seed';
-- Existing data: 'seed', Notion sync: 'notion', Admin answers: 'admin'
