import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'default-dev-secret-min-32-characters!'
);

const PUBLIC_ADMIN_PATHS = ['/admin', '/api/admin/auth'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes
  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next();
  }

  // Allow public admin paths (login page and auth API)
  if (PUBLIC_ADMIN_PATHS.some((p) => pathname === p)) {
    return NextResponse.next();
  }

  const token = request.cookies.get('mihy-admin-token')?.value;

  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  try {
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch {
    // Token invalid/expired
    const response = pathname.startsWith('/api/')
      ? NextResponse.json({ error: '인증이 만료되었습니다.' }, { status: 401 })
      : NextResponse.redirect(new URL('/admin', request.url));

    response.cookies.delete('mihy-admin-token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/api/knowledge/:path*'],
};
