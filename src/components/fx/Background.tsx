"use client"

import { useEffect, useRef } from "react"

/**
 * Fixed ambient layer behind the whole page: blueprint grid, nebula glows,
 * a cursor-following light and film grain.
 */
export function Background() {
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lightRef.current
    if (!el) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--cx", `${x}px`)
        el.style.setProperty("--cy", `${y}px`)
        el.style.opacity = "1"
        raf = 0
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Nebula glows */}
      <div className="absolute -right-[20%] -top-[25%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(61,242,255,0.10),transparent)]" />
      <div className="absolute -left-[25%] top-[30%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(138,108,255,0.10),transparent)]" />
      <div className="absolute bottom-[-30%] left-[30%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(closest-side,rgba(198,255,61,0.035),transparent)]" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(110,160,230,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(110,160,230,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 85%)",
        }}
      />

      {/* Cursor light */}
      <div
        ref={lightRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(520px circle at var(--cx, 50%) var(--cy, 30%), rgba(61,242,255,0.06), transparent 60%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
