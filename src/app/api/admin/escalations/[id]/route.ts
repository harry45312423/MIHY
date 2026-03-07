import { NextRequest, NextResponse } from 'next/server';
import {
  getEscalationById,
  resolveEscalation,
  dismissEscalation,
  getNextPendingId,
} from '@/lib/escalation';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const escalation = await getEscalationById(id);

  if (!escalation) {
    return NextResponse.json(
      { error: '에스컬레이션을 찾을 수 없습니다.' },
      { status: 404 }
    );
  }

  return NextResponse.json(escalation);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await req.json();

    // Dismiss action
    if (body.status === 'dismissed') {
      const result = await dismissEscalation(id);
      if (!result.success) {
        return NextResponse.json(
          { error: '이미 처리된 에스컬레이션입니다.' },
          { status: 409 }
        );
      }
      const nextPendingId = await getNextPendingId(id);
      return NextResponse.json({ success: true, nextPendingId });
    }

    // Resolve action
    const { answer, category, adminName } = body;

    if (!answer || typeof answer !== 'string') {
      return NextResponse.json(
        { error: '답변을 입력해주세요.' },
        { status: 400 }
      );
    }

    if (answer.length > 5000) {
      return NextResponse.json(
        { error: '답변은 5000자 이내로 입력해주세요.' },
        { status: 400 }
      );
    }

    if (!adminName || typeof adminName !== 'string') {
      return NextResponse.json(
        { error: '관리자 이름을 입력해주세요.' },
        { status: 400 }
      );
    }

    if (!category || typeof category !== 'string') {
      return NextResponse.json(
        { error: '카테고리를 선택해주세요.' },
        { status: 400 }
      );
    }

    const result = await resolveEscalation(id, answer, category, adminName);

    if (!result.success) {
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 500 });
      }
      return NextResponse.json(
        { error: '이미 처리된 에스컬레이션입니다.' },
        { status: 409 }
      );
    }

    const nextPendingId = await getNextPendingId(id);
    return NextResponse.json({ success: true, nextPendingId });
  } catch {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
