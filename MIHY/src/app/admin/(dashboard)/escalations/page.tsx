'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Escalation } from '@/types/escalation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import EscalationCard from '@/components/admin/EscalationCard';
import StatusBadge from '@/components/admin/StatusBadge';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type StatusFilter = 'pending' | 'resolved' | 'dismissed';

export default function EscalationsPage() {
  const [status, setStatus] = useState<StatusFilter>('pending');
  const [escalations, setEscalations] = useState<Escalation[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEscalations = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/admin/escalations?status=${status}&page=${page}&limit=20`
      );
      if (res.ok) {
        const data = await res.json();
        setEscalations(data.data ?? []);
        setTotalPages(data.pagination?.totalPages ?? 1);
        setTotal(data.pagination?.total ?? 0);
      }
    } catch {
      // Silently handle
    } finally {
      setIsLoading(false);
    }
  }, [status, page]);

  useEffect(() => {
    fetchEscalations();
  }, [fetchEscalations]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus as StatusFilter);
    setPage(1);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">에스컬레이션</h1>

      <Tabs value={status} onValueChange={handleStatusChange}>
        <TabsList>
          <TabsTrigger value="pending">대기중</TabsTrigger>
          <TabsTrigger value="resolved">처리완료</TabsTrigger>
          <TabsTrigger value="dismissed">무시</TabsTrigger>
        </TabsList>

        <TabsContent value={status} className="mt-4">
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 animate-pulse rounded-xl border bg-card"
                />
              ))}
            </div>
          ) : escalations.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border/60 bg-card p-8 text-center">
              <p className="text-muted-foreground">
                {status === 'pending'
                  ? '대기 중인 에스컬레이션이 없습니다.'
                  : status === 'resolved'
                    ? '처리 완료된 에스컬레이션이 없습니다.'
                    : '무시된 에스컬레이션이 없습니다.'}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden sm:block">
                <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          질문
                        </th>
                        <th className="w-20 px-4 py-3 text-center font-medium text-muted-foreground">
                          횟수
                        </th>
                        <th className="w-24 px-4 py-3 text-center font-medium text-muted-foreground">
                          유사도
                        </th>
                        <th className="w-24 px-4 py-3 text-center font-medium text-muted-foreground">
                          상태
                        </th>
                        <th className="w-28 px-4 py-3 text-right font-medium text-muted-foreground">
                          시간
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {escalations.map((esc) => (
                        <tr
                          key={esc.id}
                          className="border-b last:border-0 transition-colors hover:bg-muted/20"
                        >
                          <td className="px-4 py-3">
                            <Link
                              href={`/admin/escalations/${esc.id}`}
                              className="line-clamp-1 font-medium hover:text-primary hover:underline"
                            >
                              {esc.userQuestion}
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {esc.hitCount > 1 ? (
                              <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium">
                                {esc.hitCount}
                              </span>
                            ) : (
                              <span className="text-muted-foreground">1</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-center text-muted-foreground">
                            {esc.topSimilarity > 0
                              ? `${(esc.topSimilarity * 100).toFixed(0)}%`
                              : '-'}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <StatusBadge status={esc.status} />
                          </td>
                          <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                            {new Date(esc.createdAt).toLocaleDateString('ko-KR')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile cards */}
              <div className="space-y-3 sm:hidden">
                {escalations.map((esc) => (
                  <EscalationCard key={esc.id} escalation={esc} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-muted-foreground">
                    총 {total}건
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page <= 1}
                      onClick={() => setPage((p) => p - 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">
                      {page} / {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page >= totalPages}
                      onClick={() => setPage((p) => p + 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
