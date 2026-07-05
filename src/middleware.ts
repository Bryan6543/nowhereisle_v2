import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect root to /isle
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/isle', request.url));
  }

  return NextResponse.next();
}

// Optional: Only run on root (better performance)
export const config = {
  matcher: '/',
};