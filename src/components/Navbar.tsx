import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useLanguage } from "@/hooks/useLanguage";


export const Navbar = () => {
  const { translations } = useLanguage()

  return (
    <div className="lg:h-16 h-12 w-full flex gap-1 items-center">

      <div className="w-16 h-16 rounded-full overflow-hidden">
        <Image
          src="/logo.svg"
          alt="Logo Israel"
          width={60}
          height={60}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar desktop */}
      <div className="flex-1 h-full bg-primary-100 border-2 border-quaternary-100 rounded-full lg:flex hidden items-center justify-around">

        <a href='#about' className="text-lg">
          {translations.navbar.about.title}
        </a>

        <a href='#' className="text-lg text-secondary-100">
          {translations.navbar.portfolio.title}
        </a>

        <a href='#contact' className="text-lg">
          {translations.navbar.contact.title}
        </a>

      </div>

      {/* Navbar mobile */}
      <div className="flex-1 h-full bg-primary-100 border-2 border-quaternary-100 rounded-full lg:hidden flex items-center justify-between px-5">

        <a href='#' className="text-lg text-secondary-100">
          {translations.navbar.about.title}
        </a>

        <Sheet key={1}>
          <SheetTrigger asChild>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side='bottom' className="bg-primary-100 h-[50vh] border-secondary-100">
            <SheetHeader>
              <SheetTitle className="text-secondary-100">{translations.navbar.portfolio.title}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-center items-center gap-5 h-full">

              <a href='#about' className="text-lg font-bold w-full border-b border-tertiary-100 text-center py-2">
                {translations.navbar.about.title}
              </a>

              <a href='#contact' className="text-lg font-bold w-full border-b border-tertiary-100 text-center py-2">
                {translations.navbar.contact.title}
              </a>

            </div>
          </SheetContent>
        </Sheet>

      </div>

    </div>
  )
}
