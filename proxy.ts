import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
    matcher: ["/((?!_next|_vercel|.*\..*).*)"],
}

export function proxy(_request: NextRequest) {
    return NextResponse.next()
}
