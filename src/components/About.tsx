'use client'
import { Copy, Plus, Download } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { useLanguage } from "@/hooks/useLanguage"
import { Switch } from "./ui/switch"
import useLanguageStore from "@/store/langStore"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"

const container = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const About = () => {
  const { translations } = useLanguage()
  const { language, setLanguage } = useLanguageStore()
  const { toast } = useToast()
  const cvFile = language === 'en' ? '/RM2026!.pdf' : '/CV2026!.pdf'

  const [key, setKey] = useState(Date.now())

  useEffect(() => {
    setKey(Date.now())
  }, [translations])

  return (
    <motion.section
      className="relative overflow-hidden rounded-2xl border-2 border-quaternary-100 bg-primary-100"
      variants={container}
      initial="hidden"
      animate="visible"
      id="about"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-red-500/3 blur-[100px] pointer-events-none" />

      {/* Language toggle */}
      <div className="flex items-center gap-2 text-xs absolute top-4 right-4 z-10">
        <span className={`transition-colors ${language === 'en' ? 'text-white font-semibold' : 'text-zinc-500'}`}>EN</span>
        <Switch
          className="data-[state=checked]:bg-zinc-700 data-[state=unchecked]:bg-zinc-700"
          onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
        />
        <span className={`transition-colors ${language === 'pt' ? 'text-white font-semibold' : 'text-zinc-500'}`}>PT</span>
      </div>

      <div className="relative z-[1] lg:px-14 px-6 lg:py-14 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-2xl flex flex-col gap-6">
            {/* Available badge */}
            <motion.div
              variants={item}
              className="flex gap-2 w-fit items-center bg-tertiary-100 border border-quaternary-100 rounded-full py-1.5 px-4"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute inset-0 animate-ping opacity-75" />
              </div>
              <span className="text-xs text-green-400 font-medium tracking-wider">
                {translations.about.availableForJob}
              </span>
            </motion.div>

            {/* Name and role */}
            <motion.div variants={item} className="flex flex-col gap-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {translations.about.myself}
              </h1>
              <span className="text-lg lg:text-xl font-medium text-red-500">
                {translations.about.role}
              </span>
            </motion.div>

            {/* Title / tagline */}
            <motion.h2 variants={item} className="text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed">
              {translations.about.title}
            </motion.h2>

            {/* Typewriter description */}
            <motion.div variants={item} className="text-base lg:text-lg text-quinternary-100 leading-relaxed min-h-[5rem]">
              <Typewriter
                key={key}
                options={{ delay: 15 }}
                onInit={(typewriter) => {
                  typewriter.typeString(translations.about.description).start()
                }}
                component={motion.p}
              />
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 items-center mt-2">
              {/* Hire me */}
              <button
                className="group flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-6 h-11 shadow-button transition-all duration-300 hover:scale-[1.03]"
                onClick={() => window.open('https://www.linkedin.com/in/israel-rocha-955137249/')}
              >
                {translations.about.hireButton}
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Copy email */}
              <button
                className="flex items-center gap-2 bg-tertiary-100 border border-quaternary-100 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-lg px-5 h-11 transition-all duration-300 hover:scale-[1.03]"
                onClick={() => {
                  navigator.clipboard.writeText('israelrochadev@gmail.com')
                  toast({ title: translations.about.toastTitle, duration: 1500 })
                }}
              >
                {translations.about.copyEmailButton}
                <Copy size={14} />
              </button>

              {/* CV download */}
              <button
                className="flex items-center gap-2 bg-tertiary-100 border border-quaternary-100 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-lg px-5 h-11 transition-all duration-300 hover:scale-[1.03]"
                onClick={() => window.open(cvFile, '_blank')}
              >
                {translations.about.cvButton}
                <Download size={14} />
              </button>
            </motion.div>
          </div>

          {/* Right: Profile image (desktop) */}
          <motion.div
            variants={item}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-6, 6] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-xl" />
              <div className="w-44 h-44 rounded-full border-2 border-quaternary-100 overflow-hidden relative bg-[#2a2a2a] hover:border-red-500/40 transition-colors duration-500">
                <Image
                  src="/myprofile.jpeg"
                  alt="Israel Rocha"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile profile image */}
          <motion.div
            variants={item}
            className="lg:hidden flex justify-center"
          >
            <motion.div
              animate={{ y: [-4, 4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-28 h-28 rounded-full border-2 border-quaternary-100 overflow-hidden bg-[#2a2a2a]"
            >
              <Image
                src="/myprofile.jpeg"
                alt="Israel Rocha"
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
