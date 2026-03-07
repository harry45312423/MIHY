export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
}

export interface SyncRequest {
  databases?: string[];
  fullSync?: boolean;
}

export interface SyncStatusResponse {
  lastSync: SyncLogResponse | null;
  isRunning: boolean;
}

export interface SyncLogResponse {
  id: string;
  status: string;
  pagesProcessed: number;
  chunksCreated: number;
  chunksUpdated: number;
  chunksDeleted: number;
  errorMessage?: string;
  startedAt: string;
  completedAt?: string;
}

export interface FeedbackRequest {
  messageId: string;
  feedback: 'positive' | 'negative';
}

export interface AnalyticsData {
  totalConversations: number;
  totalMessages: number;
  avgResponseTime: number;
  satisfactionRate: number;
  topCategories: { category: string; count: number }[];
  dailyStats: { date: string; conversations: number; messages: number }[];
}
