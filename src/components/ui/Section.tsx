"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("relative z-[1] py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  )
}

interface IRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li"
}

export function Reveal({ children, className, delay = 0, as = "div" }: IRevealProps) {
  const Component = as === "li" ? motion.li : motion.div
  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
