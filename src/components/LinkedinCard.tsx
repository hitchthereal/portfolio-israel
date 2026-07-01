'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { ProjectShell } from './ProjectShell'
import { MediaReveal } from './MediaReveal'

export const LinkedinCard = () => {
  const { translations } = useLanguage()

  return (
    <ProjectShell
      eyebrow={translations.linkedinCard.description}
      title={translations.linkedinCard.title}
      className="lg:min-h-[24rem]"
    >
      <MediaReveal
        image="/SOSTHUMB.jpeg"
        video="/SOS.mp4"
        alt="SOS Promotora"
        badge="Demo"
        className="aspect-video w-full"
      />
    </ProjectShell>
  )
}
