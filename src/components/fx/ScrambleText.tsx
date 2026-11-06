"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+/<>=_"

interface IScrambleTextProps {
  text: string
  className?: string
  /** ms for the full decode */
  duration?: number
  /** ms before decoding starts once visible */
  delay?: number
}

/** Decodes text from random glyphs the first time it scrolls into view (and on every text change). */
export function ScrambleText({ text, className, duration = 900, delay = 0 }: IScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const [output, setOutput] = useState(text)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutput(text)
      return
    }

    let raf = 0
    const startAt = performance.now() + delay

    const tick = (now: number) => {
      const progress = Math.max(0, Math.min(1, (now - startAt) / duration))
      const revealed = Math.floor(progress * text.length)
      let next = ""
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        if (ch === " " || i < revealed) next += ch
        else next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setOutput(next)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, text, duration, delay])

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{output}</span>
    </span>
  )
}
