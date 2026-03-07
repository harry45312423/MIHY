import { NextRequest, NextResponse } from 'next/server';
import { getEscalations, getPendingCount } from '@/lib/escalation';
import { getChunkCount } from '@/lib/vectorStore';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Count-only mode
  if (searchParams.get('count') === 'true') {
    const count = await getPendingCount();
    return NextResponse.json({ count });
  }

  // Stats mode — returns pending count + knowledge chunk count
  if (searchParams.get('stats') === 'true') {
    const [pendingCount, chunkCount] = await Promise.all([
      getPendingCount(),
      getChunkCount(),
    ]);
    return NextResponse.json({ pendingCount, chunkCount });
  }

  const status = searchParams.get('status') || undefined;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));

  const { data, total } = await getEscalations(status, page, limit);

  return NextResponse.json({
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
