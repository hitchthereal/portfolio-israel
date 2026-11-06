"use client"

import { useEffect, type ReactNode } from "react"
import { MotionConfig } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { Toaster } from "./ui/toaster"
import { CommandPalette } from "./CommandPalette"

function HtmlLang() {
  const { language } = useLanguage()
  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR"
  }, [language])
  return null
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <HtmlLang />
      {children}
      <CommandPalette />
      <Toaster />
    </MotionConfig>
  )
}
