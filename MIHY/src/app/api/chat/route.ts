import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { after } from 'next/server';
import { searchKnowledge } from '@/lib/vectorStore';
import { buildPrompt, extractSources } from '@/lib/promptBuilder';
import { sanitizeUserInput, detectPromptInjection } from '@/lib/sanitizer';
import { checkRateLimit, getClientIp } from '@/lib/rateLimiter';
import { shouldEscalate, createEscalation } from '@/lib/escalation';
import { FALLBACK_RESPONSE } from '@/data/systemPrompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(ip, 'chat');
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil(rateLimit.resetIn / 1000).toString(),
          },
        }
      );
    }

    const body = await req.json();
    const { messages, email } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: '메시지가 필요합니다.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get the latest user message
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') {
      return new Response(
        JSON.stringify({ error: '사용자 메시지가 필요합니다.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Support both { content: string } and { parts: [{type:'text', text}] }
    let rawContent = '';
    if (typeof lastMessage.content === 'string') {
      rawContent = lastMessage.content;
    } else if (Array.isArray(lastMessage.parts)) {
      rawContent = lastMessage.parts
        .filter((p: { type: string }) => p.type === 'text')
        .map((p: { text: string }) => p.text)
        .join('');
    }

    const userQuery = sanitizeUserInput(rawContent);

    if (!userQuery) {
      return new Response(
        JSON.stringify({ error: '메시지 내용이 비어있습니다.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check for prompt injection
    if (detectPromptInjection(userQuery)) {
      return new Response(
        JSON.stringify({ error: '부적절한 요청입니다.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Search knowledge base
    let searchResults: Awaited<ReturnType<typeof searchKnowledge>> = [];
    try {
      searchResults = await searchKnowledge(userQuery);
    } catch {
      searchResults = [];
    }

    // Check if escalation is needed
    const isEscalated = shouldEscalate(searchResults);

    // Build prompt with context
    const { system, messages: promptMessages } = buildPrompt(
      userQuery,
      searchResults,
      []
    );

    const sources = extractSources(searchResults);

    // Stream response using Vercel AI SDK
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system,
      messages: promptMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      temperature: 0.3,
      maxOutputTokens: 1000,
    });

    // Create escalation after response (non-blocking, serverless-safe)
    after(async () => {
      if (isEscalated) {
        await createEscalation(
          userQuery,
          searchResults,
          typeof email === 'string' ? email : undefined
        ).catch((err) => console.error('Escalation creation failed:', err));
      }
    });

    return result.toTextStreamResponse({
      headers: {
        'X-Sources': encodeURIComponent(JSON.stringify(sources)),
        ...(isEscalated && { 'X-Escalated': 'true' }),
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: FALLBACK_RESPONSE }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
