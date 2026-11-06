"use client"

import { useCallback } from "react"
import { site, type SectionId } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useToast } from "@/components/ui/use-toast"

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Shared side effects used by the hero, command palette, terminal and contact section. */
export const useActions = () => {
  const { t, language } = useLanguage()
  const { toast } = useToast()

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      toast({ title: t.toast.emailCopied, description: site.email, duration: 2200 })
      return true
    } catch {
      window.location.href = `mailto:${site.email}`
      return false
    }
  }, [t, toast])

  const downloadCv = useCallback(() => {
    const cv = site.cv[language]
    const a = document.createElement("a")
    a.href = cv.href
    a.download = cv.fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
  }, [language])

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }, [])

  const goTo = useCallback((id: SectionId | "top") => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth"
    if (id === "top") {
      window.scrollTo({ top: 0, behavior })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" })
  }, [])

  return { copyEmail, downloadCv, openLink, goTo }
}
