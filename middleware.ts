import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
    matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
}

export function middleware(_request: NextRequest) {
    // Edge middleware placeholder — forces Next.js to use Edge runtime
    // instead of Node.js Proxy mode, which is required for Cloudflare Workers.
    return NextResponse.next()
}
