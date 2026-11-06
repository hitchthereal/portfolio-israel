"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { ArrowDown, ArrowUpRight, Copy, Download } from "lucide-react"
import { orbitLabels, site } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { NeuralSphere } from "./fx/NeuralSphere"
import { ScrambleText } from "./fx/ScrambleText"

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const rise: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  const { t } = useLanguage()
  const { copyEmail, downloadCv, openLink } = useActions()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pb-16 pt-28 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="order-2 lg:order-1 lg:col-span-7">
          <motion.div variants={rise} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/[0.06] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              <span className="hud-label text-volt">{t.hero.status}</span>
            </span>
            <span className="hud-label text-dim">{t.hero.remote}</span>
          </motion.div>

          <motion.p variants={rise} className="mt-8 font-mono text-sm text-pulse md:text-base">
            {t.hero.hello}
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-2 text-[clamp(3.6rem,12vw,8.75rem)] font-bold uppercase leading-[0.84] tracking-[-0.045em]"
          >
            <ScrambleText text={t.hero.firstName} duration={1100} delay={250} />
            <br />
            <span className="text-holo">
              <ScrambleText text={t.hero.lastName} duration={1100} delay={450} />
            </span>
          </motion.h1>

          <motion.p variants={rise} className="mt-7 flex items-center gap-3 text-xl font-medium md:text-2xl">
            <span className="h-px w-10 shrink-0 bg-gradient-to-r from-pulse to-transparent" aria-hidden="true" />
            {t.hero.role}
          </motion.p>

          <motion.p variants={rise} className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/90 md:text-xl">
            {t.hero.tagline}
          </motion.p>
          <motion.p variants={rise} className="mt-3 max-w-2xl leading-relaxed text-dim">
            {t.hero.description}
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3">
            <button type="button" className="btn-primary" onClick={() => openLink(site.linkedin)}>
              {t.hero.ctaHire}
              <ArrowUpRight size={16} />
            </button>
            <button type="button" className="btn-ghost" onClick={downloadCv}>
              {t.hero.ctaCv}
              <Download size={15} />
            </button>
            <button type="button" className="btn-ghost" onClick={copyEmail}>
              {t.hero.ctaEmail}
              <Copy size={14} />
            </button>
          </motion.div>

          <motion.dl
            variants={rise}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 bg-abyss/95 px-5 py-4">
                <dt className="hud-label text-[10px] text-dim">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[560px]">
            <NeuralSphere labels={orbitLabels} className="absolute inset-0 h-full w-full" />

            {/* Portrait core */}
            <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2">
              <div aria-hidden="true" className="absolute -inset-[16%] animate-spin-slow rounded-full border border-dashed border-pulse/30" />
              <div
                aria-hidden="true"
                className="absolute -inset-[30%] animate-spin-reverse rounded-full border border-nova/20"
                style={{ borderTopColor: "rgba(61,242,255,0.7)", borderRightColor: "rgba(61,242,255,0.15)" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-abyss shadow-[0_0_80px_-10px_rgba(61,242,255,0.55)] ring-1 ring-pulse/60">
                <Image
                  src={site.photo}
                  alt={t.hero.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 130px, 220px"
                  className="scale-[1.07] object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 mix-blend-multiply"
                  style={{ backgroundImage: "linear-gradient(transparent 50%, rgba(3,5,10,0.55) 50%)", backgroundSize: "100% 3px" }}
                />
                <div aria-hidden="true" className="absolute inset-x-0 h-1/2 animate-scan bg-gradient-to-b from-transparent via-pulse/15 to-transparent" />
                <div aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-t from-nova/20 via-transparent to-pulse/10" />
              </div>
              <span className="hud-label absolute -bottom-[34%] left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap text-[10px] text-volt">
                <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_8px_#C6FF3D]" />
                {t.hero.core}
              </span>
            </div>

            {/* HUD tags */}
            <span aria-hidden="true" className="hud-label absolute left-0 top-[6%] hidden text-[10px] text-faint sm:block">
              SUBJ // I.A.ROCHA
            </span>
            <span aria-hidden="true" className="hud-label absolute bottom-[6%] right-0 hidden text-[10px] text-faint sm:block">
              {site.coordinates}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#profile"
        className="hud-label absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] text-faint transition-colors hover:text-pulse md:flex"
      >
        <ArrowDown size={12} className="animate-bounce" />
        {t.hero.scroll}
      </a>
    </section>
  )
}
