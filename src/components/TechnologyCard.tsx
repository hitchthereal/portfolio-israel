import { useLanguage } from '@/hooks/useLanguage';
import { Code2, Terminal } from 'lucide-react';
import React from 'react'

interface ITechnologyCardProps {
  name: string
  mustApplyReverseGradient: boolean
}

export const TechnologyCard = ({ name, mustApplyReverseGradient }: ITechnologyCardProps) => {
  const { translations } = useLanguage();
  const cardName = mustApplyReverseGradient ? translations.technologyCard.reverseGradientName : translations.technologyCard.defaultName;
  const Icon = mustApplyReverseGradient ? Terminal : Code2;

  return (
    <div className="w-1/2 rounded-xl border border-quaternary-100 bg-gradient-to-br from-primary-100 to-tertiary-100 hover:border-red-500/30 transition-all duration-300">
      <div className="lg:h-32 h-24 w-full relative overflow-hidden rounded-xl flex flex-col items-center justify-center gap-2">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${mustApplyReverseGradient ? 'bg-orange-500/10' : 'bg-blue-500/10'}`}>
          <Icon size={18} className={mustApplyReverseGradient ? 'text-orange-400' : 'text-blue-400'} />
        </div>
        <p className="lg:text-sm text-xs font-medium text-zinc-300">{cardName}</p>
      </div>
    </div>
  );
};
