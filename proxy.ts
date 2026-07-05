import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/isle', request.url), { 
      status: 308 
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};