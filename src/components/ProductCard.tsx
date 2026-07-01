'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { ProjectShell } from './ProjectShell'
import { MediaReveal } from './MediaReveal'

export const ProductCard = () => {
  const { translations } = useLanguage()

  return (
    <ProjectShell
      eyebrow={translations.productCard.description}
      title={translations.productCard.title}
      className="lg:h-[51rem]"
    >
      <div className="flex flex-col gap-6">
        {/* Main showcase (web) */}
        <MediaReveal
          image="/apolo.png"
          video="/gtsolucoes.mp4"
          alt="GT Soluções — web"
          badge="Demo"
          className="aspect-video w-full"
        />

        {/* Mobile mockup */}
        <div className="flex justify-center">
          <MediaReveal
            image="/telefone.png"
            video="/gtmobile.mp4"
            alt="GT Soluções — mobile"
            className="aspect-[9/16] w-full max-w-[12rem]"
          />
        </div>
      </div>
    </ProjectShell>
  )
}
