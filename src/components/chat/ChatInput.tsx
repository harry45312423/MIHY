'use client';

import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  placeholder?: string;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder = '궁금한 점을 입력해주세요...',
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="border-t border-border/40 bg-background/80 px-5 py-4 backdrop-blur-lg pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-3xl items-end gap-3">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            rows={1}
            aria-label="메시지 입력"
            className={cn(
              'w-full resize-none rounded-xl border border-border/60 bg-white px-5 py-3.5 pr-12 text-base',
              'dark:bg-card',
              'placeholder:text-muted-foreground/50',
              'focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10',
              'disabled:opacity-50',
              'transition-all'
            )}
            maxLength={2000}
          />
          {value.length > 1800 && (
            <span
              className={cn(
                'absolute bottom-2 right-14 text-xs',
                value.length > 1950
                  ? 'text-red-500'
                  : value.length > 1800
                    ? 'text-amber-500'
                    : 'text-muted-foreground/50'
              )}
            >
              {value.length}/2000
            </span>
          )}
        </div>

        <button
          onClick={onSubmit}
          disabled={!value.trim() || isLoading}
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all',
            value.trim() && !isLoading
              ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-95'
              : 'bg-muted text-muted-foreground'
          )}
          aria-label="전송"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>

      <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted-foreground/50">
        AI 상담사의 답변은 참고용이며, 정확한 정보는 담당자에게 문의해주세요.
      </p>
    </div>
  );
}
