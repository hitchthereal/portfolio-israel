import Image from 'next/image'
import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const LinkedinCard = () => {
  const { translations } = useLanguage();

  const linkedinUrl = 'https://www.linkedin.com/in/israel-rocha-955137249/'

  return (
    <div className="w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10 lg:min-h-[24rem]">
      <div className="flex items-center justify-between">
        <div>
          <a
            target="_blank"
            className="font-semibold underline"
          >
            {translations.linkedinCard.title}
          </a>
          <p className="text-quinternary-100 text-sm mt-1">
            {translations.linkedinCard.description}
          </p>
        </div>

        {/* <div
          className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open(linkedinUrl)
          }}
        >
          <MoveUpRight size={20} className="font-bold" />
        </div> */}
      </div>

      {/* Thumbnail + vídeo no hover */}
      <div className="mt-6 w-full rounded-2xl overflow-hidden relative group aspect-video">
        {/* Imagem estática */}
        <Image
          src="/SOSTHUMB.jpeg"   // arquivo em public/SOSTHUMSB.jpeg
          alt="SOS thumbnail"
          fill
          className="
            object-cover
            opacity-100
            md:group-hover:opacity-0
            transition-opacity duration-300
          "
        />

        {/* Vídeo no hover */}
        <video
          src="/SOS.mp4"          // arquivo em public/SOS.mp4
          className="
            absolute inset-0 w-full h-full object-cover
            opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
          "
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay leve */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/40 to-transparent
            opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>
    </div>
  );
};
