import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/isle', request.url), { 
      status: 308 // Permanent redirect (good for SEO)
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Only run on root
};