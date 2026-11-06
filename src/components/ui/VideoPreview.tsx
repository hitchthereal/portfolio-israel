"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { cn } from "@/lib/utils"

interface IVideoPreviewProps {
  image: string
  video: string
  alt: string
  sizes: string
  className?: string
}

/**
 * Static thumbnail that turns into a looping muted video on hover (pointer
 * devices), when scrolled into view (touch devices) or via the play button.
 * Videos use preload="none" so nothing heavy loads until it's needed.
 */
export function VideoPreview({ image, video, alt, sizes, className }: IVideoPreviewProps) {
  const { t } = useLanguage()
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    videoRef.current?.play().catch(() => {})
  }
  const pause = () => {
    videoRef.current?.pause()
  }

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const touch = window.matchMedia("(hover: none)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!touch || reduce) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.6) videoRef.current?.play().catch(() => {})
        else videoRef.current?.pause()
      },
      { threshold: [0, 0.6, 1] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      onMouseEnter={play}
      onMouseLeave={pause}
      className={cn("group/vid relative overflow-hidden rounded-xl border border-line bg-black", className)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        className={cn("object-cover object-top transition-all duration-700", playing && "scale-105 opacity-0")}
      />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500",
          playing ? "opacity-100" : "opacity-0",
        )}
      />

      {/* scanlines + vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)", backgroundSize: "100% 3px" }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />

      <span className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-void/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur">
        <span className={cn("h-1.5 w-1.5 rounded-full", playing ? "animate-pulse bg-volt" : "bg-faint")} />
        {playing ? t.projects.live : t.projects.preview}
      </span>

      <button
        type="button"
        onClick={() => (playing ? pause() : play())}
        aria-label={playing ? t.projects.pause : t.projects.play}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-pulse/40 bg-void/70 text-pulse backdrop-blur transition-all hover:scale-110 hover:bg-pulse hover:text-void"
      >
        {playing ? <Pause size={14} /> : <Play size={14} className="translate-x-px" />}
      </button>
    </div>
  )
}
