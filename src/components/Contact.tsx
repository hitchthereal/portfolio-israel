"use client"

import type { ReactNode } from "react"
import { ArrowUpRight, Copy, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { site } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"
import { Terminal } from "./Terminal"

type Channel = {
  label: string
  value: string
  icon: ReactNode
  action: string
  actionIcon: ReactNode
  onClick: () => void
}

export function Contact() {
  const { t, language } = useLanguage()
  const { copyEmail, downloadCv, openLink } = useActions()
  const c = t.contact

  const channels: Channel[] = [
    { label: c.channels.email, value: site.email, icon: <Mail size={16} />, action: c.copy, actionIcon: <Copy size={13} />, onClick: copyEmail },
    { label: c.channels.linkedin, value: "in/israel-rocha", icon: <Linkedin size={16} />, action: c.open, actionIcon: <ArrowUpRight size={14} />, onClick: () => openLink(site.linkedin) },
    { label: c.channels.github, value: "hitchthereal", icon: <Github size={16} />, action: c.open, actionIcon: <ArrowUpRight size={14} />, onClick: () => openLink(site.github) },
    { label: c.channels.whatsapp, value: "+55 62 98209-3334", icon: <MessageCircle size={16} />, action: c.open, actionIcon: <ArrowUpRight size={14} />, onClick: () => openLink(site.whatsapp) },
    { label: c.channels.cv, value: site.cv[language].fileName, icon: <Download size={16} />, action: c.download, actionIcon: <Download size={13} />, onClick: downloadCv },
  ]

  return (
    <Section id="contact">
      <SectionHeader index="06" kicker={c.kicker} title={c.title} meta="[ uplink: open ]" />

      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6">
          <p className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[0.95] tracking-tight">
            {c.headingTop}
            <br />
            <span className="text-holo">{c.headingBottom}</span>
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-dim">{c.text}</p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {channels.map((ch) => (
              <li key={ch.label}>
                <button
                  type="button"
                  onClick={ch.onClick}
                  className="group flex w-full items-center gap-4 py-4 text-left transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-dim transition-all duration-300 group-hover:border-pulse/50 group-hover:text-pulse group-hover:shadow-[0_0_20px_-4px_rgba(61,242,255,0.5)]">
                    {ch.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="hud-label block text-[10px] text-faint">{ch.label}</span>
                    <span className="block truncate text-ink transition-colors group-hover:text-pulse">{ch.value}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-pulse">
                    <span className="hidden sm:inline">{ch.action}</span>
                    {ch.actionIcon}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <Terminal />
        </Reveal>
      </div>
    </Section>
  )
}
