import { cn } from "@/lib/utils"

/** Hexagonal "IR" monogram. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id="logo-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3DF2FF" />
          <stop offset="1" stopColor="#8A6CFF" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 35.2 11.25v17.5L20 37.5 4.8 28.75v-17.5Z"
        fill="rgba(61,242,255,0.06)"
        stroke="url(#logo-stroke)"
        strokeWidth="1.5"
      />
      <path d="M13.5 13v14" stroke="#E8F0FA" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M18.5 27V13h4.6a4.1 4.1 0 0 1 0 8.2h-4.6m4 0 4.6 5.8"
        fill="none"
        stroke="#3DF2FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
