'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface IMediaRevealProps {
  /** Static thumbnail shown by default */
  image: string
  /** Optional video revealed on hover (desktop) / autoplaying (mobile) */
  video?: string
  alt: string
  /** Aspect ratio / sizing utilities, e.g. "aspect-video" or "aspect-[9/16] max-w-[12rem]" */
  className?: string
  /** Small "live" badge label shown on the media (only when a video is present) */
  badge?: string
}

/**
 * A reusable media showcase frame: shows a static image that cross-fades into a
 * looping video on hover (desktop). Wraps everything in the shared `.media-frame`
 * treatment for consistent rounding, shadow and accent ring on hover.
 */
export const MediaReveal = ({ image, video, alt, className = '', badge }: IMediaRevealProps) => {
  return (
    <div className={`media-frame group/media bg-black ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        className={`object-cover transition-all duration-500 ${video ? 'md:group-hover/media:opacity-0 md:group-hover/media:scale-105' : ''}`}
      />

      {video && (
        <video
          src={video}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 md:group-hover/media:opacity-100"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Cinematic bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 md:group-hover/media:opacity-100" />

      {/* Live demo badge */}
      {video && badge && (
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          {badge}
        </span>
      )}

      {/* "Hover to play" hint — fades out once the video is showing */}
      {video && (
        <span className="absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] text-zinc-200 backdrop-blur-sm transition-opacity duration-300 md:flex md:group-hover/media:opacity-0">
          <Play size={11} className="fill-red-500 text-red-500" />
          Preview
        </span>
      )}
    </div>
  )
}
