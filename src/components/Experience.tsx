"use client"

import { useId, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import type { IExperienceItem, Translations } from "@/utils/lang"
import { Panel } from "./ui/Panel"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"
import { cn } from "@/lib/utils"

type ExperienceCopy = Translations["experience"]

function formatPeriod(item: IExperienceItem, copy: ExperienceCopy) {
  const start = `${copy.months[item.start.month - 1]} ${item.start.year}`
  const end = item.end ? `${copy.months[item.end.month - 1]} ${item.end.year}` : copy.present
  return `${start} — ${end}`
}

/** Inclusive month count, same convention LinkedIn uses. */
function formatDuration(item: IExperienceItem, copy: ExperienceCopy) {
  const now = new Date()
  const end = item.end ?? { year: now.getFullYear(), month: now.getMonth() + 1 }
  const total = Math.max(1, (end.year - item.start.year) * 12 + (end.month - item.start.month) + 1)
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts: string[] = []
  if (years) parts.push(`${years} ${years === 1 ? copy.duration.year : copy.duration.years}`)
  if (months) parts.push(`${months} ${months === 1 ? copy.duration.month : copy.duration.months}`)
  return parts.join(" ")
}

function Commit({ item, copy, isHead, defaultOpen }: { item: IExperienceItem; copy: ExperienceCopy; isHead: boolean; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className="relative pl-10 md:pl-16">
      {/* Commit node */}
      <span aria-hidden="true" className="absolute left-0 top-7 flex h-[23px] w-[23px] items-center justify-center md:left-[6px]">
        {isHead && <span className="absolute inset-0 animate-ping rounded-full bg-volt/40" />}
        <span
          className={cn(
            "relative h-[23px] w-[23px] rounded-full border-2 bg-void",
            isHead ? "border-volt shadow-[0_0_18px_rgba(198,255,61,0.7)]" : "border-pulse/70",
          )}
        />
        <span className={cn("absolute h-2 w-2 rounded-full", isHead ? "bg-volt" : "bg-pulse")} />
      </span>

      <Panel className="p-5 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px]">
          <span className="text-volt">commit {item.hash}</span>
          {isHead && (
            <span className="rounded border border-pulse/40 bg-pulse/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-pulse">
              {copy.head}
            </span>
          )}
          <span className="text-faint">·</span>
          <span className="text-dim">{formatPeriod(item, copy)}</span>
          <span className="text-faint">({formatDuration(item, copy)})</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-[1.7rem]">
          {item.role}
          <span className="text-faint"> @ </span>
          <span className="text-holo">{item.company}</span>
        </h3>

        <p className="mt-2 flex items-center gap-1.5 font-mono text-[12px] text-dim">
          <MapPin size={12} className="text-faint" />
          {item.location} · {item.mode}
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-ink/85">{item.summary}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-3 border-l border-line pl-5">
                {item.highlights.map((h) => (
                  <li key={h} className="relative text-[15px] leading-relaxed text-dim">
                    <span aria-hidden="true" className="absolute -left-5 top-0 font-mono text-volt">+</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <li key={s} className="chip text-[11px]">
                {s}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-dim transition-colors hover:border-pulse/50 hover:text-pulse"
          >
            {open ? copy.collapse : copy.expand}
            <ChevronDown size={14} className={cn("transition-transform duration-300", open && "rotate-180")} />
          </button>
        </div>
      </Panel>
    </div>
  )
}

export function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <Section id="experience">
      <SectionHeader index="03" kicker={e.kicker} title={e.title} subtitle={e.subtitle} meta="[ branch: main ]" />

      <div className="relative">
        {/* Branch line */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[11px] top-7 w-px bg-gradient-to-b from-volt via-pulse/60 to-nova/40 md:left-[17px]"
        />

        <ol className="relative space-y-6">
          {e.items.map((item, i) => (
            <Reveal as="li" key={item.hash}>
              <Commit item={item} copy={e} isHead={i === 0} defaultOpen={i === 0} />
            </Reveal>
          ))}

          {/* Root commit: education */}
          <Reveal as="li" className="relative pl-10 md:pl-16">
              <span aria-hidden="true" className="absolute left-0 top-5 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-nova/70 bg-void md:left-[6px]">
                <span className="h-2 w-2 rounded-full bg-nova" />
              </span>
              <div className="rounded-2xl border border-dashed border-line p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[12px]">
                  <span className="text-nova">commit {e.education.hash}</span>
                  <span className="rounded border border-nova/40 bg-nova/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-nova">
                    {e.education.tag}
                  </span>
                  <span className="text-faint">· {e.education.label}</span>
                </div>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold">
                  <GraduationCap size={18} className="text-nova" />
                  {e.education.title}
                  <span className="text-sm font-normal text-dim">
                    {e.education.school} · {e.education.period}
                  </span>
                </p>
              </div>
          </Reveal>
        </ol>
      </div>
    </Section>
  )
}
