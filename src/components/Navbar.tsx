"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { Command, Menu, X, Linkedin, Github, Mail } from "lucide-react"
import { sectionIds, site, type SectionId } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { useUiStore } from "@/store/uiStore"
import { LangToggle } from "./ui/LangToggle"
import { Logo } from "./ui/Logo"
import { cn } from "@/lib/utils"

function LocalClock({ label }: { label: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: site.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    const update = () => setTime(fmt.format(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="hud-label hidden items-center gap-2 text-dim xl:flex" title={label}>
      <span className="text-faint">GYN</span>
      <span className="tabular-nums text-ink" suppressHydrationWarning>
        {time ?? "--:--:--"}
      </span>
    </span>
  )
}

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export function Navbar() {
  const { t } = useLanguage()
  const { goTo, openLink, copyEmail } = useActions()
  const setPaletteOpen = useUiStore((s) => s.setPaletteOpen)
  const active = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform))
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const root = document.documentElement
    const prev = root.style.overflow
    root.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      root.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen])

  const links = sectionIds.map((id, i) => ({
    id,
    index: String(i + 1).padStart(2, "0"),
    label: t.nav.links[id],
  }))

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[120] rounded-md bg-pulse px-4 py-2 font-mono text-sm text-void focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <nav
          aria-label="Primary"
          className="relative mx-auto flex h-14 max-w-[1320px] items-center justify-between gap-3 overflow-hidden rounded-2xl border border-line bg-void/70 pl-3 pr-2 backdrop-blur-xl"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              goTo("top")
            }}
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={t.nav.home}
          >
            <Logo className="h-8 w-8" />
            <span className="hidden font-mono text-[13px] tracking-[0.18em] text-ink sm:inline">
              ISRAEL<span className="text-pulse">.OS</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] transition-colors duration-200",
                      isActive ? "text-ink" : "text-dim hover:text-ink",
                    )}
                  >
                    <span className={cn("font-mono text-[10px]", isActive ? "text-pulse" : "text-faint")}>
                      {link.index}
                    </span>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-[1] rounded-lg border border-pulse/30 bg-pulse/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LocalClock label={t.nav.localTime} />
            <LangToggle />
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label={t.nav.command}
              className="hidden h-8 items-center gap-1.5 rounded-lg border border-line bg-abyss/70 px-2.5 font-mono text-[11px] text-dim transition-colors hover:border-pulse/50 hover:text-ink md:flex"
            >
              <Command size={12} />
              <span>{isMac ? "⌘" : "Ctrl"} K</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.menu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-abyss/70 text-ink lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>

          {/* Scroll progress */}
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-nova via-pulse to-volt"
          />
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col bg-void/95 px-5 pb-8 pt-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13px] tracking-[0.18em]">
                ISRAEL<span className="text-pulse">.OS</span>
              </span>
              <button
                type="button"
                autoFocus
                onClick={() => setMobileOpen(false)}
                aria-label={t.nav.close}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="mt-10 flex flex-1 flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4 text-3xl font-semibold uppercase tracking-tight text-ink"
                  >
                    <span className="font-mono text-xs text-pulse">{link.index}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3">
              <LangToggle />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={t.contact.channels.email}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-dim"
                >
                  <Mail size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => openLink(site.linkedin)}
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-dim"
                >
                  <Linkedin size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => openLink(site.github)}
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-dim"
                >
                  <Github size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
