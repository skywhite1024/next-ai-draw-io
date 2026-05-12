import { type NextRequest, NextResponse } from "next/server"

const locales = ["en", "zh", "ja", "zh-Hant"]
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get("accept-language")
    if (!acceptLanguage) return defaultLocale

    const preferred = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().substring(0, 2))
        .find((lang) => locales.includes(lang))

    return preferred || defaultLocale
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if the pathname already has a locale
    const hasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )

    if (hasLocale) return NextResponse.next()

    // Redirect root to default locale
    if (pathname === "/") {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }

    // For other paths without locale, redirect to default locale
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)",
    ],
}
