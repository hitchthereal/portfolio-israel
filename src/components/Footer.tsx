import { useLanguage } from '@/hooks/useLanguage'
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react'
import React from 'react'

export const Footer = () => {

  const { translations } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "https://github.com/hitchthereal", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/israel-rocha-955137249/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/5562982093334?text=Ol%C3%A1+Israel%21", label: "WhatsApp" },
    { icon: Mail, href: "mailto:israelrochadev@gmail.com", label: "E-mail" },
  ]

  return (
    <footer className='fancy-border rounded-2xl overflow-hidden' id='contact'>
      <div className='w-full bg-primary-100/70 backdrop-blur-sm relative'>
        {/* Subtle glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-red-500/5 blur-[80px] pointer-events-none" />
        
        <div className='relative z-[1] px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-6'>
          {/* Left: name + available */}
          <div className='flex flex-col items-center lg:items-start gap-2'>
            <h3 className='text-xl font-bold text-white'>
              Israel Almeida Rocha
            </h3>
            <div className="flex items-center gap-2 bg-tertiary-100 border border-quaternary-100 rounded-full py-1 px-3">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full absolute inset-0 animate-ping opacity-75" />
              </div>
              <span className="text-[11px] text-green-400 font-medium tracking-wide">
                {translations.footer.availableForJob}
              </span>
            </div>
          </div>

          {/* Center: social icons */}
          <div className='flex items-center gap-3'>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target='_blank'
                aria-label={social.label}
                className='w-10 h-10 rounded-xl bg-tertiary-100 border border-quaternary-100 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500/30 transition-all duration-300 hover:scale-105'
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Right: copyright */}
          <div className='flex items-center gap-1.5 text-xs text-zinc-500'>
            <span>Designed & developed by Israel Rocha</span>
            <span className="text-quaternary-100">|</span>
            <span>Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
