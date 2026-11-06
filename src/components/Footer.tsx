"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { Logo } from "./ui/Logo"

export function Footer() {
  const { t } = useLanguage()
  const { goTo } = useActions()
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-[1] border-t border-line">
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="text-outline translate-y-[18%] whitespace-nowrap text-center text-[clamp(3rem,12.5vw,11.5rem)] font-bold uppercase leading-none tracking-[-0.05em] opacity-60">
          Israel Rocha
        </p>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-5 px-4 py-8 sm:px-6 md:flex-row md:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <p className="font-mono text-[12px] text-dim">
            © {year} {t.footer.rights}
          </p>
        </div>
        <p className="font-mono text-[11px] text-faint">{t.footer.built}</p>
        <button
          type="button"
          onClick={() => goTo("top")}
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:text-pulse"
        >
          {t.footer.top}
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line transition-all group-hover:-translate-y-0.5 group-hover:border-pulse/50">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  )
}
