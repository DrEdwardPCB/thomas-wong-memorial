import React from 'react'
import { useData } from '../contexts/DataContext'
import { getMediaUrl } from '../lib/supabase'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const About: React.FC = () => {
  const { getCmsTextBySlot } = useData()

  const aboutImage = getMediaUrl('/about.jpeg')

  const aboutText1 =
    getCmsTextBySlot('about-paragraph-1') ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const aboutText2 =
    getCmsTextBySlot('about-paragraph-2') ||
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const aboutText3 =
    getCmsTextBySlot('about-paragraph-3') ||
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

  return (
    <section className="py-20 bg-white" id="about">
      <div className="px-4 mx-auto max-w-6xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          About Thomas
        </h2>

        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="space-y-6">
            <HoverCard closeDelay={5000}>
              <HoverCardTrigger asChild>
                <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <p className="text-lg leading-relaxed text-gray-700">{aboutText1}</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                about-paragraph-1
              </HoverCardContent>
            </HoverCard>
            <HoverCard closeDelay={5000}>
              <HoverCardTrigger asChild>
                <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg leading-relaxed text-gray-700">{aboutText2}</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                about-paragraph-2
              </HoverCardContent>
            </HoverCard>
            <HoverCard closeDelay={5000}>
              <HoverCardTrigger asChild>
                <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-lg leading-relaxed text-gray-700">{aboutText3}</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                about-paragraph-3
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="text-center">
            <HoverCard closeDelay={5000}>
              <HoverCardTrigger asChild>
                <div className="p-8 max-w-md bg-gray-100 rounded-lg border-2 border-gray-300 border-dashed">
                  <img
                    src={aboutImage}
                    alt="Thomas"
                    className="object-cover object-[25%_30%] w-full h-auto aspect-square"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                about.jpeg
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
