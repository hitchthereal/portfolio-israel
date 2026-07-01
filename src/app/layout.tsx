import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Israel Rocha — Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js and scalable SaaS applications. 4 years of experience building high-performance digital products.",
  icons: {
    icon: "/ir-icon.svg?v=2",
    shortcut: "/ir-icon.svg?v=2",
    apple: "/ir-icon.svg?v=2",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} grain-overlay text-white bg-[#070707] max-w-[1280px] mx-auto antialiased`}>{children}</body>
    </html>
  );
}
