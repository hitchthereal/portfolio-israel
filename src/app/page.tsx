import { Background } from "@/components/fx/Background"
import { BootScreen } from "@/components/BootScreen"
import { Contact } from "@/components/Contact"
import { Endorsements } from "@/components/Endorsements"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Profile } from "@/components/Profile"
import { Projects } from "@/components/Projects"
import { Providers } from "@/components/Providers"
import { Stack } from "@/components/Stack"
import { TechMarquee } from "@/components/TechMarquee"

export default function Home() {
  return (
    <Providers>
      <BootScreen />
      <Background />
      <Navbar />
      <main id="main" className="relative z-[1]">
        <Hero />
        <TechMarquee />
        <Profile />
        <Stack />
        <Experience />
        <Projects />
        <Endorsements />
        <Contact />
      </main>
      <Footer />
    </Providers>
  )
}
