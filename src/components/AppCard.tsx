'use client'

import Image from 'next/image'
import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const AppCard = () => {
  const { translations } = useLanguage();


  const handleOpenApp = () => {
    window.open('_blank')
  }

  return (
    <div className="flex-1 w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 pt-5 px-10 overflow-hidden">

      <div className="flex items-center justify-between">
        <div>
          <a
            target="_blank"
            className="font-semibold mt-1 underline"
          >
            {translations.appCard.title}
          </a>
          <p className="text-quinternary-100 text-sm mt-1 w-full">
            {translations.appCard.description}
          </p>
        </div>

        {/* <button
          type="button"
          className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer"
          onClick={handleOpenApp}
        >
          <MoveUpRight size={20} className="font-bold" />
        </button> */}
      </div>

      {/* ÁREA NOVA: imagem -> vídeo no hover */}
       <div className="mt-3 w-full rounded-2xl overflow-hidden relative group aspect-video">
        {/* Imagem estática */}
        <Image
          src="/finafy-print.png"
          alt="Finafy demo"
          fill
          className="
            object-cover
            opacity-100
            md:group-hover:opacity-0
            transition-opacity duration-300
          "
        />

        {/* Vídeo que aparece no hover (desktop) */}
        <video
          src="/finafy.mp4"  // coloque seu vídeo em public/videos/kiwi-demo.mp4
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

        {/* Badge “Ver em ação”
        <span
          className="
            absolute top-3 right-3 rounded-full px-3 py-1 text-[11px]
            font-medium tracking-wide
            bg-gradient-to-r from-red-500 to-gray-500
            text-white shadow-lg
          "
        >
          Ver em ação
        </span> */}

        {/* Overlay leve no hover */}
        <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t from-black/40 to-transparent
              opacity-0 md:group-hover:opacity-100
              transition-opacity duration-300
            "
          />
      </div>
          <div className="w-full mt-2 rounded-2xl overflow-hidden relative group aspect-video">
            <div
              className="
              object-cover
            "
            >
              {/* Foto do telefone */}
              <Image
                src="/finafy2.png"
                alt="Finafy 2"
                fill
                className="object-cover"
              />
          </div>
      </div>
    </div>
  );
};
