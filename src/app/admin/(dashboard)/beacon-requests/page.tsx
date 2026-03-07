'use client';

import { useState, useEffect, useCallback } from 'react';
import type { BeaconRequest } from '@/types/beacon';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import StatusBadge from '@/components/admin/StatusBadge';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type StatusFilter = 'pending' | 'processed' | 'consent_issue' | 'completed';

const STATUS_LABELS: Record<StatusFilter, string> = {
  pending: '대기중',
  processed: '처리완료',
  consent_issue: '동의불가',
  completed: '완료',
};

export default function BeaconRequestsPage() {
  const [status, setStatus] = useState<StatusFilter>('pending');
  const [requests, setRequests] = useState<BeaconRequest[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRequests = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/admin/beacon-requests?status=${status}&page=${page}&limit=20`
      );
      if (res.ok) {
        const data = await res.json();
        setRequests(data.data ?? []);
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
    fetchRequests();
  }, [fetchRequests]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus as StatusFilter);
    setPage(1);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">비콘 요청</h1>

      <Tabs value={status} onValueChange={handleStatusChange}>
        <TabsList>
          {(Object.keys(STATUS_LABELS) as StatusFilter[]).map((s) => (
            <TabsTrigger key={s} value={s}>{STATUS_LABELS[s]}</TabsTrigger>
          ))}
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
          ) : requests.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border/60 bg-card p-8 text-center">
              <p className="text-muted-foreground">
                {STATUS_LABELS[status]} 상태의 비콘 요청이 없습니다.
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
                          이름
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          연락처
                        </th>
                        <th className="w-28 px-4 py-3 text-center font-medium text-muted-foreground">
                          요청일
                        </th>
                        <th className="w-24 px-4 py-3 text-center font-medium text-muted-foreground">
                          상태
                        </th>
                        <th className="w-28 px-4 py-3 text-right font-medium text-muted-foreground">
                          접수일
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((req) => (
                        <tr
                          key={req.id}
                          className="border-b last:border-0 transition-colors hover:bg-muted/20"
                        >
                          <td className="px-4 py-3">
                            <Link
                              href={`/admin/beacon-requests/${req.id}`}
                              className="font-medium hover:text-primary hover:underline"
                            >
                              {req.studentName}
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {req.studentPhone}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {req.requestDate}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <StatusBadge status={req.status} />
                          </td>
                          <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                            {new Date(req.createdAt).toLocaleDateString('ko-KR')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile cards */}
              <div className="space-y-3 sm:hidden">
                {requests.map((req) => (
                  <Link
                    key={req.id}
                    href={`/admin/beacon-requests/${req.id}`}
                    className="block rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold">{req.studentName}</span>
                      <StatusBadge status={req.status} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {req.studentPhone}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      요청일: {req.requestDate}
                    </p>
                  </Link>
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
