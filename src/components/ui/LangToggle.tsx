"use client"

import { useLanguage } from "@/hooks/useLanguage"
import type { Lang } from "@/store/langStore"
import { cn } from "@/lib/utils"

const options: Lang[] = ["en", "pt"]

export function LangToggle({ className }: { className?: string }) {
  const { t, language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn("relative flex rounded-lg border border-line bg-abyss/70 p-0.5 font-mono text-[11px]", className)}
    >
      {options.map((lang) => {
        const active = language === lang
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={active}
            lang={lang === "en" ? "en" : "pt-BR"}
            onClick={() => setLanguage(lang)}
            className={cn(
              "relative z-[1] h-7 w-9 rounded-md uppercase tracking-wider transition-colors duration-200",
              active ? "bg-pulse font-semibold text-void shadow-[0_0_16px_rgba(61,242,255,0.45)]" : "text-dim hover:text-ink",
            )}
          >
            {lang}
          </button>
        )
      })}
    </div>
  )
}
