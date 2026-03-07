export interface DocumentChunk {
  id: string;
  pageId: string;
  pageTitle: string;
  chunkIndex: number;
  content: string;
  headingContext: string;
  category: string;
  subcategory?: string;
  tags: string[];
  tokenCount: number;
  embedding?: number[];
  notionUrl: string;
  lastSynced: string;
}

export interface ParsedPage {
  pageId: string;
  title: string;
  content: string;
  headings: string[];
  properties: Record<string, string>;
  lastEdited: string;
  url: string;
}

export interface ChunkConfig {
  maxChunkSize: number;
  chunkOverlap: number;
  minChunkSize: number;
}

export interface SearchResult {
  id: string;
  pageId: string;
  pageTitle: string;
  content: string;
  headingContext: string;
  category: string;
  subcategory?: string;
  tags: string[];
  notionUrl: string;
  similarity: number;
}

export interface SearchOptions {
  category?: string;
  matchThreshold?: number;
  matchCount?: number;
}

export interface SyncLog {
  id: string;
  status: 'started' | 'completed' | 'failed';
  pagesProcessed: number;
  chunksCreated: number;
  chunksUpdated: number;
  chunksDeleted: number;
  errorMessage?: string;
  startedAt: string;
  completedAt?: string;
}
