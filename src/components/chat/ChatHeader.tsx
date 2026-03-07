'use client';

import { Plus, Menu, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';

interface ChatHeaderProps {
  onNewChat: () => void;
  onToggleSidebar?: () => void;
  status?: string;
}

export default function ChatHeader({
  onNewChat,
  onToggleSidebar,
  status,
}: ChatHeaderProps) {
  const statusText =
    status === 'streaming' || status === 'submitted'
      ? '답변 중...'
      : '온라인';

  return (
    <header className="flex h-[60px] items-center justify-between border-b border-border/40 bg-background/80 px-5 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ChevronLeft className="h-6 w-6" />
        </Link>

        {onToggleSidebar && (
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 lg:hidden"
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <div className="flex items-center gap-3">
          <Logo size="md" />
          <div>
            <h1 className="text-lg font-bold leading-tight">일자리센터 상담</h1>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-sm text-muted-foreground">{statusText}</p>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onNewChat}
        className="h-9 w-9"
        title="새 대화"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </header>
  );
}
