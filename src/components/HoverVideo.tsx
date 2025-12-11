'use client'

import React from "react"

type HoverVideoProps = {
  thumbnail: string   // /thumbs/meu-saas-1.png
  videoSrc: string    // /videos/meu-saas-1.mp4
  alt?: string
}

export function HoverVideo({ thumbnail, videoSrc, alt }: HoverVideoProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-video bg-black group">
      {/* Imagem estática */}
      <img
        src={thumbnail}
        alt={alt}
        className="
          absolute inset-0 h-full w-full object-cover
          opacity-100 md:group-hover:opacity-0
          transition-opacity duration-300
        "
      />

      {/* Vídeo - aparece no hover (desktop) e já fica ativo no mobile */}
      <video
        src={videoSrc}
        className="
          absolute inset-0 h-full w-full object-cover
          opacity-0 md:group-hover:opacity-100
          md:opacity-0
          transition-opacity duration-300
        "
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Label opcional
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
  )
}
