import type { SearchResult } from '@/types/knowledge';
import type { Message } from '@/types/chat';
import { SYSTEM_PROMPT } from '@/data/systemPrompt';

const MAX_CONTEXT_TOKENS = 4000;
const MAX_HISTORY_TURNS = 10;

interface BuiltMessages {
  system: string;
  messages: { role: 'user' | 'assistant'; content: string }[];
}

export function buildPrompt(
  query: string,
  searchResults: SearchResult[],
  conversationHistory: Message[] = []
): BuiltMessages {
  // Build context from search results
  const context = buildContext(searchResults);

  // Build system message with context
  const system = SYSTEM_PROMPT.replace('{context}', context);

  // Build conversation history (last N turns)
  const recentHistory = conversationHistory
    .filter((m) => m.role !== 'system')
    .slice(-MAX_HISTORY_TURNS * 2)
    .map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }));

  // Add current query
  const messages = [
    ...recentHistory,
    { role: 'user' as const, content: query },
  ];

  return { system, messages };
}

function buildContext(results: SearchResult[]): string {
  if (results.length === 0) {
    return '관련 정보를 찾지 못했습니다.';
  }

  let totalTokens = 0;
  const contextParts: string[] = [];

  for (const result of results) {
    const estimatedTokens = Math.ceil(result.content.length * 0.8);

    if (totalTokens + estimatedTokens > MAX_CONTEXT_TOKENS) break;

    contextParts.push(
      `[출처: ${result.pageTitle} > ${result.headingContext}]\n${result.content}`
    );
    totalTokens += estimatedTokens;
  }

  return contextParts.join('\n\n---\n\n');
}

export function extractSources(results: SearchResult[]) {
  return results.map((r) => ({
    id: r.id,
    pageId: r.pageId,
    pageTitle: r.pageTitle,
    content: r.content.substring(0, 200) + '...',
    headingContext: r.headingContext,
    category: r.category,
    notionUrl: r.notionUrl,
    similarity: r.similarity,
  }));
}
