import useLanguageStore from "@/store/langStore"
import { en, pt } from "@/utils/lang"

export const useLanguage = () => {
  const { language, setLanguage, toggleLanguage } = useLanguageStore()
  const t = language === "en" ? en : pt

  return { t, language, setLanguage, toggleLanguage }
}
