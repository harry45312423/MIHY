export interface Escalation {
  id: string;
  userQuestion: string;
  questionHash: string;
  botResponse: string | null;
  searchResults: { pageTitle: string; similarity: number; category: string }[];
  topSimilarity: number;
  status: 'pending' | 'resolved' | 'dismissed';
  hitCount: number;
  adminAnswer: string | null;
  adminName: string | null;
  knowledgeChunkId: string | null;
  category: string;
  userEmail: string | null;
  resolvedAt: string | null;
  createdAt: string;
}

export interface ResolveEscalationRequest {
  answer: string;
  category: string;
  adminName: string;
}
