import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Next AI Draw.io",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
