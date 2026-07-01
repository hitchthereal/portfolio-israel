'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface IProjectShellProps {
  /** Small uppercase category label (already localized) */
  eyebrow: string
  /** Heading of the showcase */
  title: string
  /** Optional external link — renders an action button when provided */
  href?: string
  className?: string
  children: React.ReactNode
}

/**
 * Shared surface for project showcases: gradient hairline border, consistent
 * header (eyebrow + title + optional action) and a reveal-on-scroll animation.
 */
export const ProjectShell = ({ eyebrow, title, href, className = '', children }: IProjectShellProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fancy-border group relative w-full rounded-2xl bg-primary-100/70 p-5 backdrop-blur-sm transition-colors duration-300 lg:p-6 ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="section-eyebrow">{eyebrow}</span>
          <h3 className="text-lg font-semibold leading-snug text-white lg:text-xl">{title}</h3>
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={title}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-quaternary-100 bg-tertiary-100 text-zinc-300 transition-all duration-300 hover:scale-110 hover:border-red-500/40 hover:text-red-500"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>

      {children}
    </motion.section>
  )
}
