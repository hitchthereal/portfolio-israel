import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const description =
  "Full-stack Software Engineer with 4+ years building SaaS products and white-label web platforms with React, Next.js, TypeScript and Node.js."

export const metadata: Metadata = {
  title: "Israel Rocha — Full-stack Software Engineer",
  description,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Israel Rocha — Full-stack Software Engineer",
    description,
    type: "website",
    images: ["/myprofile.jpeg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#03050A",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{".boot-failsafe{display:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
