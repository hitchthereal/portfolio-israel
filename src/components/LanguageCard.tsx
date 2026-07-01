import { useLanguage } from '@/hooks/useLanguage'
import { Layers } from 'lucide-react'
import React from 'react'

export const LanguageCard = () => {

  const { translations } = useLanguage()

  return (
    <div className="fancy-border group rounded-2xl bg-gradient-to-br from-primary-100 to-tertiary-100 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="lg:h-32 h-24 w-full rounded-2xl flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
          <Layers size={20} className="text-red-500" />
        </div>
        <div>
          <p className="lg:text-lg text-base font-semibold text-white">{translations.languageCard.title}</p>
          <p className="text-xs text-zinc-500">4 years of experience</p>
        </div>
      </div>
    </div>
  )
}
