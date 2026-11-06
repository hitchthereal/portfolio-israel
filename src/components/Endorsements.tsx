"use client"

import Image from "next/image"
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Quote, X } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import type { Translations } from "@/utils/lang"
import { Reveal, Section } from "./ui/Section"
import { SectionHeader } from "./ui/SectionHeader"
import { Corners } from "./ui/Panel"

type Card = Translations["endorsements"]["cards"][number]

function EndorsementCard({ card, onOpen, label, hidden }: { card: Card; onOpen: () => void; label: string; hidden?: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      tabIndex={hidden ? -1 : undefined}
      aria-label={`${label}: ${card.name}`}
      className="hud-panel group mx-2 flex w-[19rem] shrink-0 flex-col p-5 text-left transition-colors duration-300 hover:border-pulse/40 sm:w-[23rem]"
    >
      <div className="flex items-center gap-3">
        <Image
          src={card.image}
          alt=""
          width={48}
          height={48}
          className="h-11 w-11 rounded-full object-cover ring-1 ring-line transition-all duration-300 group-hover:ring-pulse/60"
        />
        <div className="min-w-0">
          <p className="truncate font-semibold">{card.name}</p>
          <p className="truncate font-mono text-[11px] text-dim">{card.position}</p>
        </div>
        <Quote size={22} className="ml-auto shrink-0 text-pulse/30 transition-colors group-hover:text-pulse" aria-hidden="true" />
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-dim">“{card.quote}”</p>
      <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-faint transition-colors group-hover:text-pulse">
        {label} →
      </span>
    </button>
  )
}

function MarqueeRow({ cards, reverse, onOpen, label, duration }: { cards: Card[]; reverse?: boolean; onOpen: (c: Card) => void; label: string; duration: string }) {
  return (
    <div className="pause-on-hover mask-fade-x overflow-hidden py-2 motion-reduce:overflow-x-auto">
      <div
        className={`marquee-track flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {cards.map((card) => (
          <EndorsementCard key={card.name} card={card} onOpen={() => onOpen(card)} label={label} />
        ))}
        {/* duplicate for a seamless loop; hidden from assistive tech */}
        <div aria-hidden="true" className="flex motion-reduce:hidden">
          {cards.map((card) => (
            <EndorsementCard key={`dup-${card.name}`} card={card} onOpen={() => onOpen(card)} label={label} hidden />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Endorsements() {
  const { t } = useLanguage()
  const e = t.endorsements
  const [selected, setSelected] = useState<Card | null>(null)

  const half = Math.ceil(e.cards.length / 2)
  const rowA = e.cards.slice(0, half)
  const rowB = e.cards.slice(half)

  return (
    <Section id="endorsements" className="overflow-hidden">
      <SectionHeader index="05" kicker={e.kicker} title={e.title} subtitle={e.subtitle} meta={`[ ${e.cards.length} signals ]`} />

      <Reveal className="-mx-4 flex flex-col gap-3 sm:-mx-6 lg:-mx-10">
        <MarqueeRow cards={rowA} onOpen={setSelected} label={e.readMore} duration="70s" />
        <MarqueeRow cards={rowB} onOpen={setSelected} label={e.readMore} duration="80s" reverse />
      </Reveal>

      <Dialog.Root open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[150] bg-void/75 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="hud-panel fixed left-1/2 top-1/2 z-[151] max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-6 shadow-[0_30px_120px_-20px_rgba(61,242,255,0.35)] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 md:p-8">
            {selected && (
              <>
                <Corners />
                <div className="flex items-center gap-4">
                  <Image src={selected.image} alt="" width={64} height={64} className="h-14 w-14 rounded-full object-cover ring-1 ring-pulse/50" />
                  <div className="min-w-0">
                    <Dialog.Title className="text-xl font-semibold">{selected.name}</Dialog.Title>
                    <p className="font-mono text-[12px] text-dim">{selected.position}</p>
                  </div>
                  <Dialog.Close
                    aria-label={e.close}
                    className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-dim transition-colors hover:border-pulse/50 hover:text-pulse"
                  >
                    <X size={16} />
                  </Dialog.Close>
                </div>
                <Dialog.Description asChild>
                  <blockquote className="mt-6 border-l-2 border-pulse/60 pl-5 text-[15px] leading-relaxed text-ink/90 md:text-base">
                    “{selected.quote}”
                  </blockquote>
                </Dialog.Description>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  )
}
