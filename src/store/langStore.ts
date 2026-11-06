import { create } from "zustand"

export type Lang = "en" | "pt"

interface ILanguageState {
  language: Lang
  setLanguage: (language: Lang) => void
  toggleLanguage: () => void
}

/** Always boots in English — no persistence on purpose. */
const useLanguageStore = create<ILanguageState>((set) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
  toggleLanguage: () => set((s) => ({ language: s.language === "en" ? "pt" : "en" })),
}))

export default useLanguageStore
