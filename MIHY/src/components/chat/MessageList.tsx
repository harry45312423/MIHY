'use client';

import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import type { Source } from '@/types/chat';

interface ChatMessageUI {
  id: string;
  role: string;
  parts: { type: string; text: string }[];
  isEscalated?: boolean;
  sources?: Source[];
}

interface MessageListProps {
  messages: ChatMessageUI[];
  isLoading: boolean;
}

export default function MessageList({
  messages,
  isLoading,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const getText = (msg: ChatMessageUI) =>
    msg.parts
      .filter((p) => p.type === 'text')
      .map((p) => p.text)
      .join('');

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto">
      <div className="mx-auto max-w-3xl space-y-1 py-4">
        {messages.map((message, index) => {
          const text = getText(message);
          // Skip empty assistant messages that are still loading
          if (message.role === 'assistant' && !text && isLoading) {
            return null;
          }
          // Find preceding user message for escalation email prompt
          const userQuestion =
            message.role === 'assistant' && message.isEscalated && index > 0
              ? getText(messages[index - 1])
              : undefined;
          return (
            <MessageBubble
              key={message.id}
              role={message.role as 'user' | 'assistant'}
              content={text}
              messageId={message.id}
              isEscalated={message.isEscalated}
              sources={message.sources}
              userQuestion={userQuestion}
              isStreaming={
                isLoading &&
                message.role === 'assistant' &&
                message.id === messages[messages.length - 1]?.id
              }
            />
          );
        })}

        {isLoading &&
          messages.length > 0 &&
          getText(messages[messages.length - 1]) === '' && (
            <TypingIndicator />
          )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
