import { NextRequest, NextResponse } from 'next/server';
import { createBeaconRequest } from '@/lib/beacon';

const PHONE_RE = /^01[016789]-\d{3,4}-\d{4}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 20) {
      return NextResponse.json(
        { error: '이름은 1~20자로 입력해주세요.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || !PHONE_RE.test(phone)) {
      return NextResponse.json(
        { error: '올바른 전화번호를 입력해주세요. (예: 010-1234-5678)' },
        { status: 400 }
      );
    }

    const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD

    const result = await createBeaconRequest(name.trim(), phone, today);

    if (!result.success && result.duplicate) {
      return NextResponse.json(
        { error: '오늘 이미 같은 요청이 접수되어 있습니다.' },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      date: today,
      message: `${today} ${name.trim()}님의 비콘 직권처리 요청이 접수되었습니다.`,
    });
  } catch {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
