import { NextRequest, NextResponse } from 'next/server';
import { reportConsentIssue } from '@/lib/beacon';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: '이름을 입력해주세요.' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: '전화번호를 입력해주세요.' }, { status: 400 });
    }

    const result = await reportConsentIssue(name.trim(), phone);

    if (!result.success && result.notFound) {
      return NextResponse.json(
        { error: '처리완료된 요청을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '동의 불가 상태가 담당자에게 전달되었습니다.',
    });
  } catch {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
