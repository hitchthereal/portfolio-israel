"use client"

import { motion } from "framer-motion"
import { Boxes, Code2, FlaskConical, Layout, Server, Workflow } from "lucide-react"
import type { ReactNode } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Panel } from "./ui/Panel"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"

const icons: Record<string, ReactNode> = {
  core: <Code2 size={18} />,
  backend: <Server size={18} />,
  frontend: <Layout size={18} />,
  testing: <FlaskConical size={18} />,
  devops: <Workflow size={18} />,
  practices: <Boxes size={18} />,
}

export function Stack() {
  const { t } = useLanguage()
  const s = t.stack
  const total = s.categories.reduce((sum, c) => sum + c.items.length, 0)

  return (
    <Section id="stack">
      <SectionHeader
        index="02"
        kicker={s.kicker}
        title={s.title}
        subtitle={s.subtitle}
        meta={`[ ${total} ${s.itemsLabel} · ${s.categories.length} mods ]`}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {s.categories.map((cat, i) => (
          <Reveal key={cat.id} delay={(i % 3) * 0.07} className="h-full">
            <Panel corners={cat.id === "core"} className="group flex h-full flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-abyss text-pulse transition-colors duration-300 group-hover:border-pulse/50 group-hover:shadow-[0_0_20px_-4px_rgba(61,242,255,0.5)]">
                  {icons[cat.id]}
                </span>
                <span className="font-mono text-[11px] text-faint">
                  MOD.{String(i + 1).padStart(2, "0")} · {cat.items.length} {s.itemsLabel}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{cat.title}</h3>
              <p className="mt-1 text-sm text-dim">{cat.caption}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    <span className="h-1 w-1 rounded-full bg-pulse/70" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7" aria-hidden="true">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-faint">
                  <span>status</span>
                  <span className="text-volt">loaded</span>
                </div>
                <div className="mt-2 h-px overflow-hidden bg-line">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full origin-left bg-gradient-to-r from-nova via-pulse to-volt"
                  />
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
