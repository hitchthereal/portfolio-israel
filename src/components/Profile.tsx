"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { Panel } from "./ui/Panel"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"

export function Profile() {
  const { t } = useLanguage()
  const p = t.profile

  return (
    <Section id="profile">
      <SectionHeader index="01" kicker={p.kicker} title={p.title} meta="[ profile.sys ]" />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <p className="text-[clamp(1.6rem,3.1vw,2.55rem)] font-medium leading-[1.15] tracking-tight">
            <span className="text-pulse">“</span>
            {p.statement}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-dim">{p.body}</p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <Panel corners className="p-6 md:p-7">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="hud-label text-pulse">{p.specsTitle}</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-nova" />
              </span>
            </div>
            <dl className="divide-y divide-line">
              {p.specs.map((spec) => (
                <div key={spec.key} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5 text-sm">
                  <dt className="font-mono text-[12px] uppercase tracking-wider text-faint">{spec.key}</dt>
                  <dd className="text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal>
          <h3 className="hud-label mb-6 flex items-center gap-3 text-dim">
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            {p.bringTitle}
          </h3>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {p.bring.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.06} className="h-full">
              <Panel className="group flex h-full flex-col p-5">
                <span className="font-mono text-xs text-pulse">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-6 text-lg font-semibold leading-snug">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-dim">{item.text}</p>
                <span aria-hidden="true" className="mt-auto pt-6">
                  <span className="block h-px w-0 bg-gradient-to-r from-pulse to-transparent transition-all duration-500 group-hover:w-full" />
                </span>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
