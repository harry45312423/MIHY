export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  sources?: Source[];
  feedback?: 'positive' | 'negative' | null;
  createdAt: Date;
  tokenCount?: number;
  latencyMs?: number;
}

export interface Source {
  id: string;
  pageId: string;
  pageTitle: string;
  content: string;
  headingContext: string;
  category: string;
  notionUrl: string;
  similarity: number;
}

export interface Conversation {
  id: string;
  sessionId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, unknown>;
}

export interface ChatRequest {
  message: string;
  conversationId?: string;
}

export interface StreamingChatResponse {
  conversationId: string;
  messageId: string;
  sources: Source[];
}
