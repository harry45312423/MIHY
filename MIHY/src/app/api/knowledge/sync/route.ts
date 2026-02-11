import { NextResponse } from 'next/server';
import { getDatabase, getPageBlocks, getPageTitle, getPageProperty, getNotionDatabaseIds } from '@/lib/notion';
import { parseBlocks } from '@/lib/notionParser';
import { chunkDocument } from '@/lib/chunker';
import { generateBatchEmbeddings } from '@/lib/embeddings';
import { upsertChunks, deletePageChunks } from '@/lib/vectorStore';
import { getServiceClient } from '@/lib/supabase';
import { verifyToken, getTokenFromCookies } from '@/lib/auth';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const maxDuration = 300; // 5 minutes for sync

export async function POST() {
  // Verify admin auth
  const token = await getTokenFromCookies();
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json(
      { error: '인증이 필요합니다.' },
      { status: 401 }
    );
  }

  const supabase = getServiceClient();

  // Create sync log
  const { data: syncLog, error: logError } = await supabase
    .from('sync_logs')
    .insert({ status: 'started' })
    .select()
    .single();

  if (logError || !syncLog) {
    return NextResponse.json(
      { error: '동기화 로그 생성 실패' },
      { status: 500 }
    );
  }

  try {
    const databaseIds = getNotionDatabaseIds();
    let totalPages = 0;
    let totalChunks = 0;

    for (const [category, dbId] of Object.entries(databaseIds)) {
      let pages: PageObjectResponse[];
      try {
        pages = await getDatabase(dbId);
      } catch {
        console.error(`Failed to fetch database ${category}:`, dbId);
        continue;
      }

      for (const page of pages) {
        try {
          const blocks = await getPageBlocks(page.id);
          const content = parseBlocks(blocks);
          const title = getPageTitle(page);
          const tags = getPageProperty(page, 'tags')
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean);

          const notionUrl = page.url;

          // Delete existing chunks for this page
          await deletePageChunks(page.id);

          // Create new chunks
          const chunks = chunkDocument(
            page.id,
            title,
            content,
            category,
            notionUrl,
            tags
          );

          if (chunks.length === 0) continue;

          // Generate embeddings in batch
          const embeddings = await generateBatchEmbeddings(
            chunks.map((c) => c.content)
          );

          // Attach embeddings to chunks
          for (let i = 0; i < chunks.length; i++) {
            chunks[i].embedding = embeddings[i];
          }

          // Upsert to vector store
          await upsertChunks(chunks);

          totalChunks += chunks.length;
          totalPages++;
        } catch (error) {
          console.error(`Failed to process page ${page.id}:`, error);
        }
      }
    }

    // Update sync log
    await supabase
      .from('sync_logs')
      .update({
        status: 'completed',
        pages_processed: totalPages,
        chunks_created: totalChunks,
        completed_at: new Date().toISOString(),
      })
      .eq('id', syncLog.id);

    return NextResponse.json({
      success: true,
      pagesProcessed: totalPages,
      chunksCreated: totalChunks,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';

    await supabase
      .from('sync_logs')
      .update({
        status: 'failed',
        error_message: errorMessage,
        completed_at: new Date().toISOString(),
      })
      .eq('id', syncLog.id);

    return NextResponse.json(
      { error: `동기화 실패: ${errorMessage}` },
      { status: 500 }
    );
  }
}
