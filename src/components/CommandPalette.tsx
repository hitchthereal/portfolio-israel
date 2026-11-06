"use client"

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import {
  ArrowRight,
  Briefcase,
  Download,
  FolderGit2,
  Github,
  Languages,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Quote,
  Search,
  Send,
  User,
} from "lucide-react"
import { site, type SectionId } from "@/config/site"
import { useLanguage } from "@/hooks/useLanguage"
import { useActions } from "@/hooks/useActions"
import { useUiStore } from "@/store/uiStore"
import { cn } from "@/lib/utils"

type Item = {
  id: string
  group: "navigate" | "actions" | "links"
  label: string
  icon: ReactNode
  keywords?: string
  run: () => void
}

const sectionIcons: Record<SectionId, ReactNode> = {
  profile: <User size={15} />,
  stack: <Layers size={15} />,
  experience: <Briefcase size={15} />,
  projects: <FolderGit2 size={15} />,
  endorsements: <Quote size={15} />,
  contact: <Send size={15} />,
}

export function CommandPalette() {
  const { t, toggleLanguage } = useLanguage()
  const { goTo, copyEmail, downloadCv, openLink } = useActions()
  const open = useUiStore((s) => s.paletteOpen)
  const setOpen = useUiStore((s) => s.setPaletteOpen)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  // Global shortcut: Ctrl/⌘ + K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen(!useUiStore.getState().paletteOpen)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      setQuery("")
      setActiveIndex(0)
    }
  }, [open])

  const items = useMemo<Item[]>(() => {
    const nav = (Object.keys(sectionIcons) as SectionId[]).map<Item>((id) => ({
      id: `nav-${id}`,
      group: "navigate",
      label: t.nav.links[id],
      icon: sectionIcons[id],
      keywords: id,
      run: () => goTo(id),
    }))
    return [
      ...nav,
      { id: "copy-email", group: "actions", label: t.palette.copyEmail, icon: <Mail size={15} />, keywords: "email contact", run: copyEmail },
      { id: "download-cv", group: "actions", label: t.palette.downloadCv, icon: <Download size={15} />, keywords: "cv resume curriculo pdf", run: downloadCv },
      { id: "switch-lang", group: "actions", label: t.palette.switchLang, icon: <Languages size={15} />, keywords: "language idioma english portugues", run: toggleLanguage },
      { id: "linkedin", group: "links", label: "LinkedIn", icon: <Linkedin size={15} />, run: () => openLink(site.linkedin) },
      { id: "github", group: "links", label: "GitHub", icon: <Github size={15} />, run: () => openLink(site.github) },
      { id: "whatsapp", group: "links", label: "WhatsApp", icon: <MessageCircle size={15} />, run: () => openLink(site.whatsapp) },
    ]
  }, [t, goTo, copyEmail, downloadCv, toggleLanguage, openLink])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) => `${item.label} ${item.keywords ?? ""}`.toLowerCase().includes(q))
  }, [items, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${activeIndex}"]`)?.scrollIntoView({ block: "nearest" })
  }, [activeIndex])

  const execute = (item: Item | undefined) => {
    if (!item) return
    setOpen(false)
    // let the dialog close (and restore scroll) before acting
    setTimeout(item.run, 60)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      execute(filtered[activeIndex])
    }
  }

  const groups = (["navigate", "actions", "links"] as const)
    .map((group) => ({ group, entries: filtered.filter((i) => i.group === group) }))
    .filter((g) => g.entries.length)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[150] bg-void/70 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          onKeyDown={onKeyDown}
          className="hud-panel fixed left-1/2 top-[14vh] z-[151] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden shadow-[0_30px_120px_-20px_rgba(61,242,255,0.35)] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <Dialog.Title className="sr-only">{t.nav.command}</Dialog.Title>
          <Dialog.Description className="sr-only">{t.palette.placeholder}</Dialog.Description>

          <div className="flex items-center gap-3 border-b border-line px-4">
            <Search size={16} className="shrink-0 text-pulse" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.palette.placeholder}
              aria-label={t.palette.placeholder}
              aria-activedescendant={filtered[activeIndex] ? `cmd-${filtered[activeIndex].id}` : undefined}
              aria-controls="cmd-list"
              role="combobox"
              aria-expanded="true"
              className="h-14 w-full bg-transparent font-mono text-sm text-ink placeholder:text-faint focus:outline-none"
            />
            <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">ESC</kbd>
          </div>

          <ul id="cmd-list" ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
            {groups.length === 0 && <li className="px-3 py-8 text-center font-mono text-sm text-dim">{t.palette.empty}</li>}
            {groups.map(({ group, entries }) => (
              <li key={group} role="presentation">
                <p className="hud-label px-3 pb-1 pt-3 text-faint">{t.palette.groups[group]}</p>
                <ul role="group">
                  {entries.map((item) => {
                    const index = filtered.indexOf(item)
                    const active = index === activeIndex
                    return (
                      <li
                        key={item.id}
                        id={`cmd-${item.id}`}
                        role="option"
                        aria-selected={active}
                        data-index={index}
                        onMouseMove={() => setActiveIndex(index)}
                        onClick={() => execute(item)}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                          active ? "bg-pulse/10 text-ink" : "text-dim",
                        )}
                      >
                        <span className={cn("flex h-7 w-7 items-center justify-center rounded-md border", active ? "border-pulse/50 text-pulse" : "border-line text-faint")}>
                          {item.icon}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        {active && <ArrowRight size={14} className="text-pulse" />}
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-faint">
            <span>↑↓ {t.palette.hint}</span>
            <span>↵ {t.palette.select}</span>
            <span>esc {t.palette.esc}</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
