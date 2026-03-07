import { NextResponse } from 'next/server';
import {
  createToken,
  setTokenCookie,
  clearTokenCookie,
  timingSafeEqual,
} from '@/lib/auth';
import { checkRateLimit, getClientIp } from '@/lib/rateLimiter';

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(ip, 'auth');
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: '로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.' },
      { status: 429 }
    );
  }

  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: '관리자 비밀번호가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    if (!password || !timingSafeEqual(password, adminPassword)) {
      return NextResponse.json(
        { error: '비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    const token = await createToken();
    await setTokenCookie(token);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: '서버 오류' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await clearTokenCookie();
  return NextResponse.json({ success: true });
}
