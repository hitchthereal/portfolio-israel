import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Israel Rocha",
  description: "Portfolio - Israel Rocha",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-white bg-[#070707] max-w-[1280px] mx-auto`}>{children}</body>
    </html>
  );
}
