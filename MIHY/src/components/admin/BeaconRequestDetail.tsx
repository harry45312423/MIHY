'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BeaconRequest } from '@/types/beacon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import StatusBadge from './StatusBadge';
import { Copy, Check, AlertTriangle } from 'lucide-react';

interface BeaconRequestDetailProps {
  request: BeaconRequest;
}

export default function BeaconRequestDetail({
  request,
}: BeaconRequestDetailProps) {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const kakaoTemplate = `안녕하세요, 명지대학 공동훈련센터입니다.\n${request.studentName}님의 ${request.requestDate} 비콘 직권처리가 완료되었습니다.\nHRD-Net에서 훈련생 동의를 진행해 주세요.`;

  const handleStatusUpdate = async (newStatus: string) => {
    if (newStatus === 'processed' && !adminName.trim()) return;
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/beacon-requests/${request.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          adminName: adminName.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || '상태 변경에 실패했습니다.');
      }

      router.push('/admin/beacon-requests');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyTemplate = async () => {
    await navigator.clipboard.writeText(kakaoTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* 학생 정보 카드 */}
      <div className="rounded-xl border border-border/60 bg-card p-5">
        <div className="mb-3 flex items-center gap-2">
          <StatusBadge status={request.status} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground">이름</p>
            <p className="text-base font-bold">{request.studentName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">연락처</p>
            <p className="text-base font-bold">{request.studentPhone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">요청일</p>
            <p className="text-base">{request.requestDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">접수일</p>
            <p className="text-base">
              {new Date(request.createdAt).toLocaleString('ko-KR')}
            </p>
          </div>
        </div>

        {request.adminName && (
          <p className="mt-3 text-xs text-muted-foreground">
            처리자: {request.adminName}
          </p>
        )}
      </div>

      {/* pending 상태: 처리완료 버튼 */}
      {request.status === 'pending' && (
        <div className="space-y-4">
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

          {error && (
            <p className="text-sm text-destructive" aria-live="polite">{error}</p>
          )}

          <Button
            onClick={() => handleStatusUpdate('processed')}
            disabled={isSubmitting || !adminName.trim()}
          >
            {isSubmitting ? '처리 중...' : '처리완료'}
          </Button>
        </div>
      )}

      {/* processed 상태: 카톡 메시지 템플릿 */}
      {request.status === 'processed' && (
        <div className="space-y-4">
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="mb-2 text-sm font-bold text-blue-800 dark:text-blue-300">
              카카오톡 메시지 템플릿
            </h3>
            <p className="whitespace-pre-wrap text-sm">{kakaoTemplate}</p>
            <div className="mt-3 flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleCopyTemplate}>
                {copied ? (
                  <Check className="mr-1 h-3.5 w-3.5" />
                ) : (
                  <Copy className="mr-1 h-3.5 w-3.5" />
                )}
                {copied ? '복사됨' : '복사'}
              </Button>
              <span className="text-sm text-muted-foreground">
                연락처: {request.studentPhone}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive" aria-live="polite">{error}</p>
          )}

          <Button
            onClick={() => handleStatusUpdate('completed')}
            disabled={isSubmitting}
          >
            {isSubmitting ? '처리 중...' : '완료'}
          </Button>
        </div>
      )}

      {/* consent_issue 상태: 경고 배너 */}
      {request.status === 'consent_issue' && (
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <div>
              <h3 className="font-bold text-red-800 dark:text-red-300">
                훈련생 동의 불가
              </h3>
              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                {request.studentName}님이 HRD-Net 훈련생 동의에 어려움을 겪고 있습니다.
                확인 후 재처리해 주세요.
              </p>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive" aria-live="polite">{error}</p>
          )}

          <Button
            onClick={() => handleStatusUpdate('processed')}
            disabled={isSubmitting}
          >
            {isSubmitting ? '처리 중...' : '재처리'}
          </Button>
        </div>
      )}

      {/* completed 상태: 완료 정보 */}
      {request.status === 'completed' && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
          <h3 className="mb-2 text-lg font-bold text-emerald-800 dark:text-emerald-300">
            처리 완료
          </h3>
          <p className="text-sm">
            {request.adminName && `처리자: ${request.adminName}`}
            {request.completedAt && (
              <>
                {' '}
                &middot;{' '}
                {new Date(request.completedAt).toLocaleString('ko-KR')}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
