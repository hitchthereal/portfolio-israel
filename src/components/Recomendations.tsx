import React, { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguage } from '@/hooks/useLanguage'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import { Quote } from 'lucide-react'

export const Recomendations = () => {
  
  const { translations } = useLanguage()
 
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
 
  
  return (
    <div className='w-full lg:min-h-[20rem] bg-primary-100 rounded-xl border border-quaternary-100 py-8 px-6 lg:px-14'>
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-tertiary-100 border border-quaternary-100 flex items-center justify-center">
          <Quote size={16} className="text-red-500" />
        </div>
        <h3 className='font-semibold text-lg text-white'>{translations.recommendations.title}</h3>
      </div>
      <p className='text-quinternary-100 text-sm ml-11'>{translations.recommendations.subtitle}</p>

      <div className='flex mt-6'>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {translations.recommendations.cards.map((item, index) => (
              <CarouselItem key={`${index}-${item.name}`} className="sm:basis-1/2 lg:basis-1/2 xl:basis-1/3 flex items-center justify-center">
                <div className="p-1">
                  <Card
                    name={item.name}
                    position={item.position}
                    quote={item.quote}
                    image={item.image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='bg-tertiary-100 border-quaternary-100 hover:bg-quaternary-100 active:bg-tertiary-100 focus:bg-tertiary-100 text-white' />
          <CarouselNext className='bg-tertiary-100 border-quaternary-100 hover:bg-quaternary-100 active:bg-tertiary-100 focus:bg-tertiary-100 text-white' />
        </Carousel>
      </div>
    </div>
  )
}

interface ICardProps {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const Card = ({ name, position, quote, image }: ICardProps) => {

  return (
    <div className='rounded-2xl border border-quaternary-100 hover:border-red-500/20 transition-all duration-300'>
      <div className='h-48 lg:w-[20rem] w-full bg-tertiary-100 rounded-2xl text-white flex flex-col gap-4 justify-center px-5 py-5 overflow-hidden'>
        <div className='flex items-center gap-3'>
          
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className='rounded-full w-12 h-12 border border-quaternary-100 object-cover'
          />

          <div>
            <h4 className='font-medium text-sm'>{name}</h4>
            <p className='text-[10px] text-zinc-500'>{position}</p>
          </div>
        </div>
        <p className='text-xs text-zinc-400 overflow-hidden text-ellipsis lg:line-clamp-4 line-clamp-3 cursor-pointer leading-relaxed' title={quote}>
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </div>
  )
}