"use client"

import { ScrambleText } from "@/components/fx/ScrambleText"

interface ISectionHeaderProps {
  index: string
  kicker: string
  title: string
  subtitle?: string
  meta?: string
}

export function SectionHeader({ index, kicker, title, subtitle, meta }: ISectionHeaderProps) {
  return (
    <header className="mb-10 flex flex-col gap-6 border-b border-line pb-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <p className="hud-label flex items-center gap-3 text-pulse">
          <span className="text-faint">{index}</span>
          <span className="h-px w-8 bg-pulse/60" aria-hidden="true" />
          <span>{`// ${kicker}`}</span>
        </p>
        <h2 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
          <ScrambleText text={title} />
        </h2>
        {subtitle && <p className="mt-4 max-w-xl text-base text-dim md:text-lg">{subtitle}</p>}
      </div>
      {meta && (
        <span className="hud-label hidden shrink-0 text-faint md:block" aria-hidden="true">
          {meta}
        </span>
      )}
    </header>
  )
}
