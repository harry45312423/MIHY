'use client';

import Link from 'next/link';
import type { Escalation } from '@/types/escalation';
import StatusBadge from './StatusBadge';

interface EscalationCardProps {
  escalation: Escalation;
}

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const date = new Date(dateStr).getTime();
  const diff = now - date;

  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}일 전`;

  return new Date(dateStr).toLocaleDateString('ko-KR');
}

export default function EscalationCard({ escalation }: EscalationCardProps) {
  return (
    <Link
      href={`/admin/escalations/${escalation.id}`}
      className="block rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <StatusBadge status={escalation.status} />
        <span className="shrink-0 text-xs text-muted-foreground">
          {timeAgo(escalation.createdAt)}
        </span>
      </div>

      <p className="mb-2 line-clamp-2 text-sm font-medium">
        {escalation.userQuestion}
      </p>

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        {escalation.hitCount > 1 && (
          <span className="rounded-md bg-muted px-1.5 py-0.5 font-medium">
            {escalation.hitCount}명 질문
          </span>
        )}
        {escalation.topSimilarity > 0 && (
          <span>유사도 {(escalation.topSimilarity * 100).toFixed(0)}%</span>
        )}
      </div>
    </Link>
  );
}
