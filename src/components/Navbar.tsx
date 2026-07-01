import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useLanguage } from "@/hooks/useLanguage";


export const Navbar = () => {
  const { translations } = useLanguage()

  const navLinks = [
    { href: '#about', label: translations.navbar.about.title },
    { href: '#skills', label: translations.navbar.skills.title },
    { href: '#contact', label: translations.navbar.contact.title },
  ]

  return (
    <nav className="lg:h-16 h-14 w-full flex gap-2 items-center">

      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-quaternary-100 hover:ring-red-500/40 transition-all duration-300">
        <Image
          src="/logo.svg"
          alt="Logo Israel"
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar desktop */}
      <div className="fancy-border flex-1 h-12 bg-primary-100/70 backdrop-blur-sm rounded-full lg:flex hidden items-center justify-center gap-1 px-2">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-tertiary-100 transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="px-6 py-2 rounded-full text-sm font-medium bg-tertiary-100 text-red-500 border border-red-500/20"
        >
          {translations.navbar.portfolio.title}
        </a>
      </div>

      {/* Navbar mobile */}
      <div className="fancy-border flex-1 h-12 bg-primary-100/70 backdrop-blur-sm rounded-full lg:hidden flex items-center justify-between px-5">

        <a href='#' className="text-base font-medium text-red-500">
          {translations.navbar.portfolio.title}
        </a>

        <Sheet key={1}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-full hover:bg-tertiary-100 transition-colors">
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side='bottom' className="bg-primary-100 h-[45vh] border-t border-red-500/20 rounded-t-3xl">
            <SheetHeader>
              <SheetTitle className="text-red-500 text-lg">{translations.navbar.portfolio.title}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-center items-center gap-3 mt-8">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-lg font-medium w-full text-center py-3 rounded-xl hover:bg-tertiary-100 transition-colors text-zinc-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>

      </div>

    </nav>
  )
}
