import { marqueeWords } from "@/config/site"

/** Oversized outlined tech names drifting across the page. Decorative only. */
export function TechMarquee() {
  const row = [...marqueeWords, ...marqueeWords]

  return (
    <div aria-hidden="true" className="relative z-[1] -rotate-[1.5deg] border-y border-line bg-abyss/60 py-5 backdrop-blur-sm">
      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee items-center" style={{ ["--marquee-duration" as string]: "55s" }}>
          {row.map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center">
              <span
                className={`px-6 text-4xl font-bold uppercase tracking-tight md:text-6xl ${i % 3 === 0 ? "text-ink" : "text-outline"}`}
              >
                {word}
              </span>
              <span className="text-xl text-pulse md:text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
