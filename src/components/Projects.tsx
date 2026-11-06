"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import type { Translations } from "@/utils/lang"
import { Panel } from "./ui/Panel"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"
import { VideoPreview } from "./ui/VideoPreview"
import { cn } from "@/lib/utils"

type ProjectCopy = Translations["projects"]["items"][number]

function ProjectWindow({ project, index, children, className }: { project: ProjectCopy; index: number; children: ReactNode; className?: string }) {
  const inProgress = project.id === "finafy"

  return (
    <Panel className={cn("flex h-full flex-col", className)}>
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-faint">~/projects/{project.id}</span>
        <span
          className={cn(
            "shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
            inProgress ? "border-nova/40 bg-nova/10 text-nova" : "border-volt/30 bg-volt/[0.07] text-volt",
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="p-3 md:p-4">{children}</div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-line px-5 py-5">
        <div className="min-w-0">
          <p className="hud-label text-[10px] text-pulse">{project.category}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-dim">{project.description}</p>
        </div>
        <span className="font-mono text-4xl font-bold text-line" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Panel>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const [gt, sos, finafy] = p.items

  return (
    <Section id="projects">
      <SectionHeader index="04" kicker={p.kicker} title={p.title} subtitle={p.subtitle} meta={`[ ${p.items.length} builds ]`} />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="lg:col-span-2">
          <ProjectWindow project={gt} index={0}>
            <div className="flex flex-col gap-3 md:flex-row">
              <VideoPreview
                image="/apolo.png"
                video="/gtsolucoes.mp4"
                alt={`${gt.name} — web`}
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="aspect-[1900/908] w-full md:flex-1"
              />
              <VideoPreview
                image="/telefone.png"
                video="/gtmobile.mp4"
                alt={`${gt.name} — mobile`}
                sizes="220px"
                className="mx-auto aspect-[389/641] w-44 shrink-0 md:mx-0 md:w-[22%]"
              />
            </div>
          </ProjectWindow>
        </Reveal>

        <Reveal className="h-full">
          <ProjectWindow project={sos} index={1}>
            <VideoPreview
              image="/SOSTHUMB.jpeg"
              video="/SOS.mp4"
              alt={sos.name}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="aspect-[1280/612] w-full"
            />
          </ProjectWindow>
        </Reveal>

        <Reveal className="h-full" delay={0.08}>
          <ProjectWindow project={finafy} index={2}>
            <VideoPreview
              image="/finafy-print.png"
              video="/finafy.mp4"
              alt={finafy.name}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="aspect-[1904/910] w-full"
            />
          </ProjectWindow>
        </Reveal>
      </div>
    </Section>
  )
}
