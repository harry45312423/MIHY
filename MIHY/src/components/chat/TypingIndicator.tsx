'use client';

import Logo from '@/components/shared/Logo';

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 animate-fade-in">
      <Logo size="sm" className="shrink-0 rounded-lg" />
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:bg-card dark:shadow-none">
        <span className="text-xs text-muted-foreground">답변을 준비하고 있어요</span>
        <div className="flex items-center gap-0.5 ml-1">
          <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary/50" />
          <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary/50" />
          <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary/50" />
        </div>
      </div>
    </div>
  );
}
