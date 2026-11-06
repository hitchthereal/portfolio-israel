"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { cn } from "@/lib/utils"

const BOOT_KEY = "israel-os-booted"
const DURATION = 1700

/** Short, skippable boot sequence shown once per browser session. */
export function BootScreen() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState<"boot" | "exit" | "done">("boot")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(BOOT_KEY) === "1"
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (seen || reduce) {
      setPhase("done")
      return
    }
    try {
      sessionStorage.setItem(BOOT_KEY, "1")
    } catch {}

    const root = document.documentElement
    const prevOverflow = root.style.overflow
    root.style.overflow = "hidden"

    let raf = 0
    let exitTimer: ReturnType<typeof setTimeout> | undefined
    let doneTimer: ReturnType<typeof setTimeout> | undefined
    const start = performance.now()

    const finish = () => {
      cancelAnimationFrame(raf)
      setProgress(1)
      setPhase("exit")
      root.style.overflow = prevOverflow
      doneTimer = setTimeout(() => setPhase("done"), 650)
      window.removeEventListener("keydown", finish)
      window.removeEventListener("pointerdown", finish)
    }

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
      else exitTimer = setTimeout(finish, 250)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener("keydown", finish)
    window.addEventListener("pointerdown", finish)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      root.style.overflow = prevOverflow
      window.removeEventListener("keydown", finish)
      window.removeEventListener("pointerdown", finish)
    }
  }, [])

  if (phase === "done") return null

  const lines = t.boot.lines
  const visibleLines = Math.min(lines.length, Math.floor(progress * (lines.length + 0.6)) + 1)
  const percent = Math.round(progress * 100)

  return (
    <div
      aria-hidden="true"
      className={cn(
        "boot-failsafe fixed inset-0 z-[200] flex items-center justify-center bg-void px-6 transition-[opacity,filter] duration-500",
        phase === "exit" && "pointer-events-none opacity-0 blur-sm",
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(110,160,230,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(110,160,230,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, #000, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000, transparent 70%)",
        }}
      />
      <div className="relative w-full max-w-md font-mono text-[12px] sm:text-[13px]">
        <div className="mb-6 flex items-center justify-between text-faint">
          <span className="tracking-[0.3em] text-pulse">ISRAEL.OS</span>
          <span>v26.11</span>
        </div>

        <ul className="space-y-2 text-dim">
          {lines.slice(0, visibleLines).map((line, i) => (
            <li key={line} className="flex gap-3">
              <span className={i === lines.length - 1 && progress >= 1 ? "text-volt" : "text-pulse"}>
                {i === lines.length - 1 && progress >= 1 ? "✓" : ">"}
              </span>
              <span className={i === visibleLines - 1 ? "text-ink" : undefined}>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-4">
          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-line">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-nova via-pulse to-volt shadow-[0_0_12px_rgba(61,242,255,0.8)]"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="w-10 text-right tabular-nums text-ink">{percent}%</span>
        </div>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.25em] text-faint">{t.boot.skip}</p>
      </div>
    </div>
  )
}
