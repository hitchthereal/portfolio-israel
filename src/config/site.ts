export const site = {
  name: "Israel Almeida Rocha",
  shortName: "Israel Rocha",
  email: "israelrochadev@gmail.com",
  linkedin: "https://www.linkedin.com/in/israel-rocha-955137249/",
  github: "https://github.com/hitchthereal",
  whatsapp: "https://wa.me/5562982093334?text=Ol%C3%A1+Israel%21",
  photo: "/myprofile.jpeg",
  timeZone: "America/Sao_Paulo",
  coordinates: "16.6869° S · 49.2648° W",
  cv: {
    en: { href: "/RM2026!.pdf", fileName: "Israel-Rocha-Resume.pdf" },
    pt: { href: "/CV2026!.pdf", fileName: "Israel-Rocha-Curriculo.pdf" },
  },
} as const

export const sectionIds = ["profile", "stack", "experience", "projects", "endorsements", "contact"] as const
export type SectionId = (typeof sectionIds)[number]

/** Tech labels that orbit the hero sphere (not translated). */
export const orbitLabels = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "shadcn/ui",
  "Zustand",
  "Zod",
  "Java",
  "Spring Boot",
  "Angular",
  "C#/.NET",
  "Cypress",
  "Playwright",
  "Docker",
  "GitHub Actions",
]

export const marqueeWords = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "Angular",
  "Cypress",
  "Playwright",
  "Docker",
]
