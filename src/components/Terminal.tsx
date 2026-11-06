"use client"

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import { site } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { cn } from "@/lib/utils"

type Line = { kind: "in" | "out" | "ok" | "err" | "accent"; text: string }

const PROMPT = "israel@os:~$"
const SUGGESTIONS = ["help", "whoami", "stack", "experience", "contact", "sudo hire"]

export function Terminal() {
  const { t, language, setLanguage } = useLanguage()
  const { copyEmail, downloadCv, openLink } = useActions()
  const [lines, setLines] = useState<Line[]>([])
  const [value, setValue] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const run = (raw: string) => {
    const input = raw.trim()
    if (!input) return
    const [cmd, ...args] = input.toLowerCase().split(/\s+/)
    const out: Line[] = [{ kind: "in", text: input }]
    const term = t.terminal

    switch (cmd) {
      case "help":
        term.help.forEach(([name, desc]) => out.push({ kind: "out", text: `${name.padEnd(12, " ")}${desc}` }))
        break
      case "whoami":
        out.push({ kind: "accent", text: term.whoami })
        break
      case "about":
        out.push({ kind: "out", text: t.profile.statement })
        out.push({ kind: "out", text: t.hero.description })
        break
      case "stack":
      case "skills":
        t.stack.categories.forEach((c) => out.push({ kind: "out", text: `[${c.title}] ${c.items.join(", ")}` }))
        break
      case "experience":
      case "log": {
        const e = t.experience
        e.items.forEach((item) => {
          const end = item.end ? item.end.year : e.present
          out.push({ kind: "out", text: `${item.hash}  ${item.start.year}–${end}  ${item.role} @ ${item.company}` })
        })
        break
      }
      case "contact":
        out.push({ kind: "out", text: `email     ${site.email}` })
        out.push({ kind: "out", text: `linkedin  ${site.linkedin.replace("https://www.", "")}` })
        out.push({ kind: "out", text: `github    ${site.github.replace("https://", "")}` })
        break
      case "email":
        copyEmail()
        out.push({ kind: "ok", text: term.emailCopied })
        break
      case "cv":
      case "resume":
        downloadCv()
        out.push({ kind: "ok", text: term.cvDownloading })
        break
      case "lang": {
        const target = args[0]
        if (target === "en" || target === "pt") {
          setLanguage(target)
          const next = target === "en" ? "language set to English." : "idioma alterado para português."
          out.push({ kind: "ok", text: next })
        } else {
          out.push({ kind: "err", text: term.langUsage })
        }
        break
      }
      case "date":
        out.push({
          kind: "out",
          text: new Date().toLocaleString(language === "en" ? "en-US" : "pt-BR", { timeZone: site.timeZone }) + " (GYN)",
        })
        break
      case "hire":
      case "sudo":
        if (cmd === "hire" || args[0] === "hire") {
          term.hire.forEach((text) => out.push({ kind: "ok", text }))
          setTimeout(() => openLink(site.linkedin), 700)
          break
        }
        out.push({ kind: "err", text: `${term.notFound} ${input}` })
        break
      case "clear":
        setLines([])
        setHistory((h) => [input, ...h])
        setCursor(-1)
        return
      default:
        out.push({ kind: "err", text: `${term.notFound} ${cmd}` })
        out.push({ kind: "out", text: term.notFoundHint })
    }

    setLines((prev) => [...prev, ...out].slice(-200))
    setHistory((h) => [input, ...h].slice(0, 50))
    setCursor(-1)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    run(value)
    setValue("")
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      const next = Math.min(cursor + 1, history.length - 1)
      if (next >= 0) {
        setCursor(next)
        setValue(history[next])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = cursor - 1
      setCursor(Math.max(next, -1))
      setValue(next >= 0 ? history[next] : "")
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    }
  }

  const welcome: Line[] = [
    ...t.terminal.welcome.map<Line>((text, i) => ({ kind: i === 0 ? "accent" : "out", text })),
    { kind: "in", text: "whoami" },
    { kind: "accent", text: t.terminal.whoami },
  ]

  return (
    <div className="hud-panel flex flex-col overflow-hidden shadow-[0_30px_100px_-40px_rgba(61,242,255,0.5)]">
      <div className="flex items-center gap-3 border-b border-line bg-abyss/80 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </span>
        <span className="flex-1 text-center font-mono text-[12px] text-faint">{t.terminal.title}</span>
        <span className="font-mono text-[10px] text-faint">zsh</span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-[320px] cursor-text overflow-y-auto p-4 font-mono text-[12.5px] leading-relaxed md:h-[380px] md:p-5 md:text-[13px]"
      >
        <div role="log" aria-live="polite" aria-relevant="additions">
          {[...welcome, ...lines].map((line, i) => (
            <div
              key={i}
              className={cn(
                "whitespace-pre-wrap break-words",
                line.kind === "in" && "mt-3 text-ink first:mt-0",
                line.kind === "out" && "text-dim",
                line.kind === "ok" && "text-volt",
                line.kind === "err" && "text-[#ff7a7a]",
                line.kind === "accent" && "text-pulse",
              )}
            >
              {line.kind === "in" && <span className="mr-2 text-volt">{PROMPT}</span>}
              {line.text}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="mt-3 flex items-center">
          <label htmlFor="terminal-input" className="mr-2 shrink-0 text-volt">
            {PROMPT}
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label={t.terminal.inputLabel}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full min-w-0 bg-transparent text-ink caret-pulse focus:outline-none"
          />
        </form>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-line px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{t.terminal.hint}</span>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              run(s)
              inputRef.current?.focus({ preventScroll: true })
            }}
            className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-dim transition-colors hover:border-pulse/50 hover:text-pulse"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
