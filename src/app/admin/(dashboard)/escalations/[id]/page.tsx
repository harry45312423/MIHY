'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import type { Escalation } from '@/types/escalation';
import EscalationDetail from '@/components/admin/EscalationDetail';
import { ChevronLeft } from 'lucide-react';

export default function EscalationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [escalation, setEscalation] = useState<Escalation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/admin/escalations/${id}`);
        if (!res.ok) {
          throw new Error('에스컬레이션을 찾을 수 없습니다.');
        }
        const data = await res.json();
        setEscalation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id]);

  return (
    <div>
      <Link
        href="/admin/escalations"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        목록으로
      </Link>

      {isLoading ? (
        <div className="space-y-4">
          <div className="h-48 animate-pulse rounded-xl border bg-card" />
          <div className="h-32 animate-pulse rounded-xl border bg-card" />
        </div>
      ) : error ? (
        <div className="rounded-xl border border-destructive/50 bg-destructive/5 p-8 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      ) : escalation ? (
        <EscalationDetail escalation={escalation} />
      ) : null}
    </div>
  );
}
