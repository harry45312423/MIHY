import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Compute SHA-256 hash matching the one in escalation.ts */
async function hashQuestion(question: string): Promise<string> {
  const normalized = question.trim().toLowerCase().replace(/\s+/g, ' ');
  const data = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userQuestion, email } = body;

    if (!userQuestion || typeof userQuestion !== 'string') {
      return NextResponse.json(
        { error: '질문 정보가 필요합니다.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    const questionHash = await hashQuestion(userQuestion);
    const supabase = getServiceClient();

    // Find the most recent pending escalation with this hash
    const { data, error } = await supabase
      .from('escalations')
      .update({ user_email: email.trim() })
      .eq('question_hash', questionHash)
      .eq('status', 'pending')
      .select('id')
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: '해당 질문을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
