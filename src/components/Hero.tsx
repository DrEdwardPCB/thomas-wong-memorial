import React from 'react'
import { useData } from '../contexts/DataContext'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card'
import { getMediaUrl } from '../lib/supabase'

const Hero: React.FC = () => {
  const { getCmsTextBySlot } = useData()

  const heroSubtitle = getCmsTextBySlot('hero-subtitle') || 'Forever in our hearts'
  const heroSubtitle2 = getCmsTextBySlot('hero-subtitle-2') || 'Formula 1 Enthusiast'
  const heroImage = getMediaUrl('/hero.jpeg')

  return (
    <section className="flex relative justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Subtle racing background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute h-10 w-10 md:w-32 md:h-32 border-2 border-red-600 rounded-full top-10 left-10 animate-spin"
          style={{ animationDuration: '30s' }}
        ></div>
        <div
          className="absolute right-20 bottom-20 h-6 w-6 md:w-24 md:h-24 rounded-full border-2 border-blue-600 animate-spin"
          style={{ animationDuration: '25s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 h-4 w-4 md:w-16 md:h-16 rounded-full border-2 border-yellow-500 animate-spin"
          style={{ animationDuration: '35s' }}
        ></div>
      </div>

      <div className="z-10 px-4 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-light text-gray-800 md:text-7xl">Thomas Wong</h1>
          <div className="mb-2 text-2xl text-red-600 md:text-4xl display-font">王顥銘</div>
        </div>

        <div className="mb-8">
          <div className="mb-2 text-xl text-gray-600 md:text-2xl">
            April 25, 2001 - August 3, 2025
          </div>
          <HoverCard closeDelay={5000}>
            <HoverCardTrigger asChild>
              <div className="text-lg italic text-gray-500 md:text-xl">{heroSubtitle}</div>
            </HoverCardTrigger>
            <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
              hero-subtitle
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mt-8">
          <HoverCard closeDelay={5000}>
            <HoverCardTrigger asChild>
              <div className="p-8 max-w-md bg-gray-100 border-2 border-gray-300 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Thomas"
                  className="object-cover object-[25%_30%] w-full h-auto "
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
              hero.jpeg
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mt-8">
          <HoverCard closeDelay={5000}>
            <HoverCardTrigger asChild>
              <div className="inline-block px-6 py-3 text-sm font-bold text-white bg-red-600 rounded-lg transition-transform duration-300 transform racing-font hover:scale-105">
                {heroSubtitle2}
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
              hero-subtitle-2
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  )
}

export default Hero
