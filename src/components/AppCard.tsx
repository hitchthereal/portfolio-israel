'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { ProjectShell } from './ProjectShell'
import { MediaReveal } from './MediaReveal'

export const AppCard = () => {
  const { translations } = useLanguage()

  return (
    <ProjectShell
      eyebrow={translations.appCard.description}
      title={translations.appCard.title}
      className="flex-1"
    >
      <div className="flex flex-col gap-3">
        <MediaReveal
          image="/finafy-print.png"
          video="/finafy.mp4"
          alt="Finafy Benefícios — demo"
          badge="Demo"
          className="aspect-video w-full"
        />

        <MediaReveal
          image="/finafy2.png"
          alt="Finafy Benefícios"
          className="aspect-video w-full"
        />
      </div>
    </ProjectShell>
  )
}
