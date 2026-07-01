'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { Code2, Server, Palette, ShieldCheck, GitBranch, Star, Globe, Boxes } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={20} className="text-red-500" />,
  server: <Server size={20} className="text-red-500" />,
  palette: <Palette size={20} className="text-red-500" />,
  shield: <ShieldCheck size={20} className="text-red-500" />,
  git: <GitBranch size={20} className="text-red-500" />,
  star: <Star size={20} className="text-red-500" />,
  ecosystem: <Boxes size={20} className="text-red-500" />,
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const SkillsSection = () => {
  const { translations } = useLanguage()

  return (
    <section id="skills" className="w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="fancy-border w-full bg-primary-100/70 backdrop-blur-sm rounded-2xl py-10 px-6 lg:px-10"
      >
        {/* Header */}
        <div className="flex flex-col gap-1 mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            {translations.skills.title}
          </h2>
          <p className="text-quinternary-100 text-sm ml-4">
            {translations.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {translations.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="group relative rounded-xl border border-quaternary-100 bg-tertiary-100 p-5 transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_30px_-8px_rgba(230,62,33,0.15)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1f1f1f] border border-quaternary-100 flex items-center justify-center group-hover:border-red-500/30 transition-colors">
                      {iconMap[category.icon]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        {category.title}
                      </h3>
                      {category.years && (
                        <span className="text-[11px] text-quinternary-100">
                          {category.years}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#1a1a1a] border border-quaternary-100 text-zinc-300 group-hover:border-red-500/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div variants={cardVariant} className="mt-6">
          <div className="flex flex-wrap gap-4">
            {translations.skills.languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-quaternary-100 bg-tertiary-100 px-5 py-3 hover:border-red-500/30 transition-colors"
              >
                <Globe size={18} className="text-red-500" />
                <div>
                  <span className="text-white text-sm font-medium">{lang.name}</span>
                  <span className="text-quinternary-100 text-xs ml-2">— {lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
