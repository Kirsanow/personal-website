import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle both /nocode and /nocode/* paths
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/js-for-bubblers', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/nocode')) {
    // Create a new URL for the root path while keeping the original URL visible
    const url = new URL('/', request.url)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/nocode', '/nocode/:path*'],
}
