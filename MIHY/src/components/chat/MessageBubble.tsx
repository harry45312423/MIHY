'use client';

import { User, ThumbsUp, ThumbsDown, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import SourceCitation from './SourceCitation';
import EmailPrompt from './EmailPrompt';
import type { Source } from '@/types/chat';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  messageId?: string;
  isStreaming?: boolean;
  isEscalated?: boolean;
  sources?: Source[];
  userQuestion?: string;
}

export default function MessageBubble({
  role,
  content,
  messageId,
  isStreaming = false,
  isEscalated = false,
  sources,
  userQuestion,
}: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(
    null
  );
  const isUser = role === 'user';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = async (type: 'positive' | 'negative') => {
    setFeedback(type);
    if (messageId) {
      try {
        await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messageId, feedback: type }),
        });
      } catch {
        // Silently fail — feedback is best-effort
      }
    }
  };

  return (
    <div
      className={cn(
        'group flex gap-3 px-5 py-3',
        isUser ? 'animate-slide-in-right' : 'animate-slide-in-left'
      )}
    >
      {/* Assistant avatar */}
      {!isUser && (
        <Logo size="sm" className="shrink-0 rounded-lg" />
      )}

      <div
        className={cn('flex max-w-[85%] flex-col', isUser && 'ml-auto items-end')}
      >
        {/* Message bubble */}
        <div
          className={cn(
            'px-5 py-3.5 text-[16px] leading-relaxed',
            isUser
              ? 'rounded-2xl rounded-br-md bg-primary text-primary-foreground'
              : 'rounded-2xl rounded-bl-md bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:bg-card dark:shadow-none'
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{content}</p>
          ) : (
            <div className="prose-chat">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
              {isStreaming && (
                <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-primary/60" />
              )}
            </div>
          )}
        </div>

        {/* Source citation */}
        {!isUser && !isStreaming && sources && sources.length > 0 && (
          <SourceCitation sources={sources} />
        )}

        {/* Escalation notice + email prompt */}
        {!isUser && !isStreaming && isEscalated && (
          <>
            <p role="status" className="mt-1.5 text-xs text-amber-600 dark:text-amber-400">
              이 질문은 담당자에게 전달되었어요.
            </p>
            {userQuestion && <EmailPrompt userQuestion={userQuestion} />}
          </>
        )}

        {/* Action buttons for assistant messages */}
        {!isUser && !isStreaming && content && (
          <div className="mt-1 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 sm:opacity-0 max-sm:opacity-100">
            <button
              onClick={handleCopy}
              className="rounded-md p-1.5 text-muted-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="복사"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              onClick={() => handleFeedback('positive')}
              disabled={feedback !== null}
              className={cn(
                'rounded-md p-1.5 transition-colors',
                feedback === 'positive'
                  ? 'text-emerald-600'
                  : 'text-muted-foreground/60 hover:bg-muted hover:text-foreground',
                feedback !== null && feedback !== 'positive' && 'opacity-40'
              )}
              aria-label="도움이 됐어요"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => handleFeedback('negative')}
              disabled={feedback !== null}
              className={cn(
                'rounded-md p-1.5 transition-colors',
                feedback === 'negative'
                  ? 'text-red-500'
                  : 'text-muted-foreground/60 hover:bg-muted hover:text-foreground',
                feedback !== null && feedback !== 'negative' && 'opacity-40'
              )}
              aria-label="개선이 필요해요"
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary">
          <User className="h-3.5 w-3.5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
