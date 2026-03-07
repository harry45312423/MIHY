import { NextRequest, NextResponse } from 'next/server';
import { getBeaconRequests, getPendingBeaconCount } from '@/lib/beacon';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Count-only mode
  if (searchParams.get('count') === 'true') {
    const count = await getPendingBeaconCount();
    return NextResponse.json({ count });
  }

  const status = searchParams.get('status') || undefined;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));

  const { data, total } = await getBeaconRequests(status, page, limit);

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
