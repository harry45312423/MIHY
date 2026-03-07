'use client';

import { useState, type FormEvent } from 'react';
import Logo from '@/components/shared/Logo';
import { Radio, X } from 'lucide-react';

interface BeaconRequestFormProps {
  onComplete: (message: string, studentName: string, studentPhone: string) => void;
  onCancel: () => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export default function BeaconRequestForm({
  onComplete,
  onCancel,
}: BeaconRequestFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || !phone || submitting) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/beacon-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '요청에 실패했습니다.');
      }

      onComplete(
        `${data.date} ${trimmedName}님의 비콘 직권처리 요청이 접수되었습니다.\n처리 완료 후 카카오톡으로 안내드릴게요.`,
        trimmedName,
        phone
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex gap-3 px-5 py-3 animate-slide-in-left">
      <Logo size="sm" className="shrink-0 rounded-lg" />
      <div className="flex max-w-[85%] flex-col">
        <div className="rounded-2xl rounded-bl-md bg-white px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:bg-card dark:shadow-none">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/30">
                <Radio className="h-4 w-4" />
              </div>
              <h3 className="text-[15px] font-bold">비콘 직권처리 요청</h3>
            </div>
            <button
              onClick={onCancel}
              className="rounded-md p-1 text-muted-foreground/60 hover:bg-muted hover:text-foreground"
              aria-label="취소"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-4 text-sm text-muted-foreground">
            요청일: <span className="font-medium text-foreground">{today}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="beacon-name" className="mb-1 block text-xs font-medium text-muted-foreground">
                이름
              </label>
              <input
                id="beacon-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                maxLength={20}
                required
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                disabled={submitting}
              />
            </div>

            <div>
              <label htmlFor="beacon-phone" className="mb-1 block text-xs font-medium text-muted-foreground">
                연락처
              </label>
              <input
                id="beacon-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="010-1234-5678"
                required
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                disabled={submitting}
              />
            </div>

            {error && (
              <p className="text-xs text-destructive" aria-live="polite">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting || !name.trim() || !phone}
              className="h-9 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {submitting ? '접수 중...' : '요청 접수'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
