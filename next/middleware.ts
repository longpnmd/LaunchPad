import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const locales: string[] = Array.from(i18n.locales)
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Kiểm tra xem đường dẫn có phải là auth route không
  const isAuthRoute = pathname.startsWith('/auth') || 
                      pathname.startsWith('/login') || 
                      pathname.startsWith('/register') ||
                      pathname.startsWith('/forgot-password') ||
                      pathname.startsWith('/reset-password') ||
                      pathname.startsWith('/verify-email')
                      pathname.startsWith('/admin') 

  // Nếu là auth route, bỏ qua xử lý locale
  if (isAuthRoute) {
    return NextResponse.next()
  }

  // Kiểm tra xem pathname đã có locale chưa
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Nếu đã có locale trong pathname, không cần redirect
  if (pathnameHasLocale) return NextResponse.next()

  // Redirect nếu không có locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and `/auth/` and `/dashboard/` and `/admin/`
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth|dashboard|admin).*)',
  ],
}