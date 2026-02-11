-- ============================================
-- MIHY - Supabase pgvector 스키마 설정
-- Supabase SQL Editor에서 실행하세요
-- ============================================

-- 1. pgvector 확장 활성화
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. knowledge_chunks 테이블 생성
CREATE TABLE IF NOT EXISTS knowledge_chunks (
  id              TEXT PRIMARY KEY,
  page_id         TEXT NOT NULL,
  page_title      TEXT NOT NULL,
  chunk_index     INTEGER NOT NULL CHECK (chunk_index >= 0),
  content         TEXT NOT NULL CHECK (length(content) > 0),
  heading_context TEXT DEFAULT '',
  category        TEXT NOT NULL,
  subcategory     TEXT,
  tags            TEXT[] DEFAULT '{}',
  token_count     INTEGER DEFAULT 0 CHECK (token_count >= 0),
  embedding       vector(1536),
  notion_url      TEXT DEFAULT '',
  last_synced     TIMESTAMPTZ DEFAULT now(),
  created_at      TIMESTAMPTZ DEFAULT now(),

  UNIQUE(page_id, chunk_index)
);

-- 3. 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_chunks_category
  ON knowledge_chunks(category);

CREATE INDEX IF NOT EXISTS idx_chunks_page_id
  ON knowledge_chunks(page_id);

-- HNSW 인덱스 (ivfflat 대신 — 빈 테이블에서도 정상 동작, 재인덱싱 불필요)
CREATE INDEX IF NOT EXISTS idx_chunks_embedding
  ON knowledge_chunks
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- 4. 벡터 유사도 검색 RPC 함수
-- camelCase 알리아스로 반환하여 TypeScript SearchResult 타입과 일치
CREATE OR REPLACE FUNCTION match_chunks(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.5,
  match_count INT DEFAULT 10,
  filter_category TEXT DEFAULT NULL
)
RETURNS TABLE (
  id TEXT,
  "pageId" TEXT,
  "pageTitle" TEXT,
  content TEXT,
  "headingContext" TEXT,
  category TEXT,
  subcategory TEXT,
  tags TEXT[],
  "notionUrl" TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
SECURITY INVOKER
AS $$
BEGIN
  RETURN QUERY
  WITH scored AS (
    SELECT
      kc.id,
      kc.page_id,
      kc.page_title,
      kc.content,
      kc.heading_context,
      kc.category,
      kc.subcategory,
      kc.tags,
      kc.notion_url,
      1 - (kc.embedding <=> query_embedding) AS sim
    FROM knowledge_chunks kc
    WHERE filter_category IS NULL OR kc.category = filter_category
  )
  SELECT
    scored.id,
    scored.page_id AS "pageId",
    scored.page_title AS "pageTitle",
    scored.content,
    scored.heading_context AS "headingContext",
    scored.category,
    scored.subcategory,
    scored.tags,
    scored.notion_url AS "notionUrl",
    scored.sim AS similarity
  FROM scored
  WHERE scored.sim > match_threshold
  ORDER BY scored.sim DESC
  LIMIT match_count;
END;
$$;

-- 5. sync_logs 테이블 (동기화 이력)
CREATE TABLE IF NOT EXISTS sync_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status          TEXT NOT NULL DEFAULT 'started'
                    CHECK (status IN ('started', 'completed', 'failed')),
  pages_processed INTEGER DEFAULT 0,
  chunks_created  INTEGER DEFAULT 0,
  chunks_updated  INTEGER DEFAULT 0,
  chunks_deleted  INTEGER DEFAULT 0,
  error_message   TEXT,
  started_at      TIMESTAMPTZ DEFAULT now(),
  completed_at    TIMESTAMPTZ
);

-- 6. feedback 테이블 (사용자 피드백)
CREATE TABLE IF NOT EXISTS feedback (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id  TEXT,
  type        TEXT NOT NULL CHECK (type IN ('positive', 'negative')),
  comment     TEXT CHECK (length(comment) <= 2000),
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at
  ON feedback(created_at);

-- 7. Row Level Security (RLS)
-- knowledge_chunks: 공개 읽기, 쓰기는 service_role만
ALTER TABLE knowledge_chunks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_read_chunks"
  ON knowledge_chunks FOR SELECT
  TO anon
  USING (true);

-- sync_logs: 비공개 (service_role만 접근)
ALTER TABLE sync_logs ENABLE ROW LEVEL SECURITY;

-- feedback: 공개 INSERT만 허용, 읽기/수정/삭제 불가
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_feedback"
  ON feedback FOR INSERT
  TO anon
  WITH CHECK (true);

-- 완료 확인
SELECT 'Setup complete!' AS status,
       (SELECT count(*) FROM knowledge_chunks) AS chunks_count;
