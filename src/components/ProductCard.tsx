import Image from 'next/image'
import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage';

export const ProductCard = () => {
  const { translations } = useLanguage();

  return (
    <div className="lg:h-[51rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <a
            target="_blank"
            className="font-semibold underline"
          >
            {translations.productCard.title}
          </a>
          <p className="text-quinternary-100 text-sm mt-1">
            {translations.productCard.description}
          </p>
        </div>

        {/* <div
          className="flex items-center justify-center p-2 bg-red-500 rounded-full shadow-button hover:scale-110 transition-all cursor-pointer"
          onClick={() => {
            window.open('https://www.wealt.app/')
          }}
        >
          <MoveUpRight size={20} className="font-bold" />
        </div> */}
      </div>

      {/* BLOCO IMAGENS + VÍDEO */}
      <div className="mt-6 flex flex-col gap-6">
        {/* 1) Imagem principal + vídeo no hover */}
        <div className="w-full rounded-2xl overflow-hidden relative group aspect-video">
          {/* print estático */}
          <Image
            src="/apolo.png"       // public/apolo.png
            alt="Apolo"
            fill
            className="
              object-cover
              opacity-100
              md:group-hover:opacity-0
              transition-opacity duration-300
            "
          />

          {/* vídeo no hover */}
          <video
            src="/gtsolucoes.mp4"       // public/APOLO.mp4
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

          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t from-black/40 to-transparent
              opacity-0 md:group-hover:opacity-100
              transition-opacity duration-300
            "
          />
        </div>

        {/* 2) Segunda imagem embaixo */}
        <div className="w-full flex justify-center">
  <div
    className="
      relative group
      aspect-[9/16]          /* proporção de celular */
      max-w-[12rem]          /* largura máxima do telefone */
      w-full
      rounded-2xl
      overflow-hidden
    "
  >
    {/* Foto do telefone */}
    <Image
      src="/telefone.png"
      alt="Apolo – tela mobile"
      fill
      className="object-cover"
    />

    {/* Vídeo exatamente por cima da foto */}
    <video
      src="/gtmobile.mp4"
      className="
        absolute inset-0 w-full h-full
        object-cover
        opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300
      "
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</div>
</div>
    </div>
  );
};
