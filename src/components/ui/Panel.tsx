"use client"

import { useCallback, useRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface IPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Draw HUD corner brackets */
  corners?: boolean
}

/** Glass HUD surface with a cursor-tracking border glow. */
export function Panel({ className, children, corners = false, onPointerMove, ...rest }: IPanelProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = ref.current
      if (el) {
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      }
      onPointerMove?.(e)
    },
    [onPointerMove],
  )

  return (
    <div ref={ref} onPointerMove={handleMove} className={cn("hud-panel spotlight", className)} {...rest}>
      {corners && <Corners />}
      {children}
    </div>
  )
}

export function Corners({ className }: { className?: string }) {
  const base = "pointer-events-none absolute h-3 w-3 border-pulse/70"
  return (
    <span aria-hidden="true" className={className}>
      <span className={cn(base, "-left-px -top-px rounded-tl-md border-l border-t")} />
      <span className={cn(base, "-right-px -top-px rounded-tr-md border-r border-t")} />
      <span className={cn(base, "-bottom-px -left-px rounded-bl-md border-b border-l")} />
      <span className={cn(base, "-bottom-px -right-px rounded-br-md border-b border-r")} />
    </span>
  )
}
