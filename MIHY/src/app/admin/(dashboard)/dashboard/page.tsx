'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Escalation } from '@/types/escalation';
import EscalationCard from '@/components/admin/EscalationCard';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function AdminDashboardPage() {
  const [pendingCount, setPendingCount] = useState(0);
  const [beaconPendingCount, setBeaconPendingCount] = useState(0);
  const [chunkCount, setChunkCount] = useState(0);
  const [recentEscalations, setRecentEscalations] = useState<Escalation[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const [statsRes, listRes, beaconCountRes] = await Promise.all([
          fetch('/api/admin/escalations?stats=true'),
          fetch('/api/admin/escalations?status=pending&limit=5'),
          fetch('/api/admin/beacon-requests?count=true'),
        ]);

        if (statsRes.ok) {
          const data = await statsRes.json();
          setPendingCount(data.pendingCount ?? 0);
          setChunkCount(data.chunkCount ?? 0);
        }

        if (listRes.ok) {
          const data = await listRes.json();
          setRecentEscalations(data.data ?? []);
        }

        if (beaconCountRes.ok) {
          const data = await beaconCountRes.json();
          setBeaconPendingCount(data.count ?? 0);
        }
      } catch {
        // Silently handle
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const handleSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      const res = await fetch('/api/knowledge/sync', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setChunkCount(data.chunksCreated ?? chunkCount);
        alert(`동기화 완료: ${data.pagesProcessed}개 페이지, ${data.chunksCreated}개 청크`);
      } else {
        const err = await res.json().catch(() => null);
        alert(err?.error || '동기화에 실패했습니다.');
      }
    } catch {
      alert('동기화 중 오류가 발생했습니다.');
    } finally {
      setIsSyncing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">대시보드</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl border bg-card" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">대시보드</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/admin/escalations"
          className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
        >
          <p className="text-sm font-medium text-muted-foreground">
            대기 중 에스컬레이션
          </p>
          <p className="mt-1 text-3xl font-bold">{pendingCount}</p>
        </Link>

        <Link
          href="/admin/beacon-requests"
          className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
        >
          <p className="text-sm font-medium text-muted-foreground">
            대기 중 비콘 요청
          </p>
          <p className="mt-1 text-3xl font-bold">{beaconPendingCount}</p>
        </Link>

        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="text-sm font-medium text-muted-foreground">
            지식 청크 수
          </p>
          <p className="mt-1 text-3xl font-bold">{chunkCount}</p>
        </div>

        <div className="flex items-center justify-center rounded-xl border border-border/60 bg-card p-5">
          <Button
            variant="outline"
            onClick={handleSync}
            disabled={isSyncing}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? '동기화 중...' : '지식 동기화'}
          </Button>
        </div>
      </div>

      {/* Recent escalations */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">최근 에스컬레이션</h2>
          {pendingCount > 0 && (
            <Link
              href="/admin/escalations"
              className="text-sm font-medium text-primary hover:underline"
            >
              전체 보기
            </Link>
          )}
        </div>

        {recentEscalations.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 bg-card p-8 text-center">
            <p className="text-muted-foreground">
              아직 에스컬레이션이 없습니다.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/70">
              챗봇이 답변하지 못한 질문이 여기에 표시됩니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {recentEscalations.map((esc) => (
              <EscalationCard key={esc.id} escalation={esc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
