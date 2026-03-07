import { NextRequest, NextResponse } from 'next/server';
import { getBeaconRequestById, updateBeaconStatus } from '@/lib/beacon';
import type { BeaconRequestStatus } from '@/types/beacon';

const VALID_TRANSITIONS: Record<string, BeaconRequestStatus[]> = {
  pending: ['processed'],
  processed: ['completed'],
  consent_issue: ['processed'],
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const request = await getBeaconRequestById(id);

  if (!request) {
    return NextResponse.json(
      { error: '비콘 요청을 찾을 수 없습니다.' },
      { status: 404 }
    );
  }

  return NextResponse.json(request);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await req.json();
    const { status, adminName, adminNote } = body;

    if (!status || typeof status !== 'string') {
      return NextResponse.json(
        { error: '상태값을 입력해주세요.' },
        { status: 400 }
      );
    }

    // 현재 요청 조회
    const current = await getBeaconRequestById(id);
    if (!current) {
      return NextResponse.json(
        { error: '비콘 요청을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 상태 전이 검증
    const allowed = VALID_TRANSITIONS[current.status];
    if (!allowed || !allowed.includes(status as BeaconRequestStatus)) {
      return NextResponse.json(
        { error: `${current.status}에서 ${status}로 변경할 수 없습니다.` },
        { status: 400 }
      );
    }

    const result = await updateBeaconStatus(
      id,
      status as BeaconRequestStatus,
      adminName,
      adminNote
    );

    if (!result.success) {
      return NextResponse.json(
        { error: '상태 변경에 실패했습니다.' },
        { status: 500 }
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
