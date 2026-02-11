import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';
import { checkRateLimit, getClientIp } from '@/lib/rateLimiter';

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(ip, 'feedback');
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: '요청이 너무 많습니다.' },
      { status: 429 }
    );
  }

  try {
    const { messageId, feedback } = await req.json();

    if (!messageId || !['positive', 'negative'].includes(feedback)) {
      return NextResponse.json(
        { error: '잘못된 요청입니다.' },
        { status: 400 }
      );
    }

    const supabase = getServiceClient();

    const { error } = await supabase
      .from('feedback')
      .insert({ message_id: messageId, type: feedback });

    if (error) {
      return NextResponse.json(
        { error: '피드백 저장 실패' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: '서버 오류' },
      { status: 500 }
    );
  }
}
