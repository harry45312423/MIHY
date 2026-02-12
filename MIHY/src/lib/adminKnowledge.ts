import type { DocumentChunk } from '@/types/knowledge';
import { generateEmbedding } from './embeddings';
import { upsertChunks, deletePageChunks } from './vectorStore';

/**
 * Ingest a short admin answer into the knowledge base.
 * Uses a dedicated path (not chunkDocument) to avoid minChunkSize filtering.
 */
export async function ingestAdminAnswer(
  escalationId: string,
  question: string,
  answer: string,
  category: string
): Promise<string> {
  // Q&A format improves retrieval quality
  const content = `Q: ${question}\nA: ${answer}`;
  const pageId = `admin-answer-${escalationId}`;
  const pageTitle = `관리자 답변: ${question.substring(0, 50)}`;

  // Delete existing chunks for idempotency
  await deletePageChunks(pageId);

  const chunk: DocumentChunk = {
    id: `${pageId}_chunk_0`,
    pageId,
    pageTitle,
    chunkIndex: 0,
    content,
    headingContext: question,
    category,
    tags: ['admin-answer'],
    tokenCount: Math.ceil(content.length * 0.8),
    notionUrl: '',
    lastSynced: new Date().toISOString(),
  };

  // Generate embedding without query prefix
  chunk.embedding = await generateEmbedding(content);

  // Upsert with source='admin' handled by the column default
  await upsertChunks([chunk]);

  return chunk.id;
}
