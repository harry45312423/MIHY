'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Escalation } from '@/types/escalation';
import { ESCALATION_CATEGORIES } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import StatusBadge from './StatusBadge';

interface EscalationDetailProps {
  escalation: Escalation;
}

export default function EscalationDetail({
  escalation,
}: EscalationDetailProps) {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const [adminName, setAdminName] = useState('');
  const [category, setCategory] = useState(escalation.category);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [error, setError] = useState('');

  const isPending = escalation.status === 'pending';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!answer.trim() || !adminName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/escalations/${escalation.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: answer.trim(), category, adminName: adminName.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || '저장에 실패했습니다.');
      }

      const data = await res.json();
      if (data.nextPendingId) {
        router.push(`/admin/escalations/${data.nextPendingId}`);
      } else {
        router.push('/admin/escalations');
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = async () => {
    if (!confirm('이 에스컬레이션을 무시하시겠습니까?')) return;

    setIsDismissing(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/escalations/${escalation.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'dismissed' }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || '처리에 실패했습니다.');
      }

      const data = await res.json();
      if (data.nextPendingId) {
        router.push(`/admin/escalations/${data.nextPendingId}`);
      } else {
        router.push('/admin/escalations');
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setIsDismissing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Question info */}
      <div className="rounded-xl border border-border/60 bg-card p-5">
        <div className="mb-3 flex items-center gap-2">
          <StatusBadge status={escalation.status} />
          {escalation.hitCount > 1 && (
            <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {escalation.hitCount}명이 같은 질문
            </span>
          )}
        </div>

        <h2 className="mb-2 text-lg font-bold">사용자 질문</h2>
        <p className="whitespace-pre-wrap text-base">{escalation.userQuestion}</p>

        {escalation.botResponse && (
          <div className="mt-4">
            <h3 className="mb-1 text-sm font-semibold text-muted-foreground">
              봇 응답
            </h3>
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">
              {escalation.botResponse}
            </p>
          </div>
        )}

        {escalation.searchResults.length > 0 && (
          <div className="mt-4">
            <h3 className="mb-1 text-sm font-semibold text-muted-foreground">
              검색 결과
            </h3>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {escalation.searchResults.map((r, i) => (
                <li key={i}>
                  {r.pageTitle} — 유사도 {(r.similarity * 100).toFixed(0)}% ({r.category})
                </li>
              ))}
            </ul>
          </div>
        )}

        {escalation.userEmail && (
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
              이메일 알림
            </span>
            <span className="text-sm text-muted-foreground">{escalation.userEmail}</span>
          </div>
        )}

        <p className="mt-3 text-xs text-muted-foreground">
          {new Date(escalation.createdAt).toLocaleString('ko-KR')}
        </p>
      </div>

      {/* Resolved info */}
      {escalation.status === 'resolved' && escalation.adminAnswer && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
          <h2 className="mb-2 text-lg font-bold text-emerald-800 dark:text-emerald-300">
            관리자 답변
          </h2>
          <p className="whitespace-pre-wrap text-base">{escalation.adminAnswer}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {escalation.adminName} &middot;{' '}
            {escalation.resolvedAt
              ? new Date(escalation.resolvedAt).toLocaleString('ko-KR')
              : ''}
          </p>
        </div>
      )}

      {/* Answer form (pending only) */}
      {isPending && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="answer" className="mb-2 block text-sm font-semibold">
              답변 입력
            </label>
            <Textarea
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="사용자 질문에 대한 답변을 입력해주세요..."
              maxLength={5000}
              rows={5}
              required
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {answer.length}/5000
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="adminName" className="mb-2 block text-sm font-semibold">
                관리자 이름
              </label>
              <Input
                id="adminName"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                placeholder="이름을 입력하세요"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-semibold">
                카테고리
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none"
              >
                {ESCALATION_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive" aria-live="polite">
              {error}
            </p>
          )}

          <div className="flex gap-3">
            <Button type="submit" disabled={isSubmitting || !answer.trim() || !adminName.trim()}>
              {isSubmitting ? '등록 중...' : '답변 등록'}
            </Button>
            {escalation.userEmail && (
              <span className="text-xs text-muted-foreground self-center">
                답변 등록 시 {escalation.userEmail}로 이메일이 발송됩니다.
              </span>
            )}
            <Button
              type="button"
              variant="outline"
              onClick={handleDismiss}
              disabled={isDismissing}
            >
              {isDismissing ? '처리 중...' : '무시'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
