'use client';

import { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmailPromptProps {
  userQuestion: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailPrompt({ userQuestion }: EmailPromptProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (status === 'done') {
    return (
      <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
        <Check className="h-3.5 w-3.5" />
        <span>등록되었습니다! 답변이 완료되면 이메일로 알려드릴게요.</span>
      </div>
    );
  }

  const handleSubmit = async () => {
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setErrorMsg('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/escalations/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userQuestion, email: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || '등록에 실패했습니다.');
      }

      setStatus('done');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : '오류가 발생했습니다.');
      setStatus('error');
    }
  };

  return (
    <div className="mt-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5">
      <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Mail className="h-3.5 w-3.5" />
        <span>답변이 완료되면 이메일로 알려드릴까요?</span>
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorMsg) setErrorMsg('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          placeholder="이메일 주소 입력"
          className="h-8 flex-1 rounded-md border border-input bg-background px-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          disabled={status === 'submitting'}
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'submitting' || !email.trim()}
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors',
            email.trim()
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground'
          )}
          aria-label="이메일 등록"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
      {errorMsg && (
        <p className="mt-1 text-xs text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
