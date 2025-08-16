import React from 'react'
import { useData } from '../contexts/DataContext'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { getMediaUrl } from '../lib/supabase'

const Family: React.FC = () => {
  const { getCmsTextBySlot } = useData()

  const familyMembers = [
    {
      id: 1,
      name: getCmsTextBySlot('family-member-1-name') || 'Racing Family',
      description:
        getCmsTextBySlot('family-member-1-description') ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: getMediaUrl('/family-1.jpeg'),
    },
    {
      id: 2,
      name: getCmsTextBySlot('family-member-2-name') || 'Pit Crew',
      description:
        getCmsTextBySlot('family-member-2-description') ||
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: getMediaUrl('/family-2.jpeg'),
    },
    {
      id: 3,
      name: getCmsTextBySlot('family-member-3-name') || 'F1 Community',
      description:
        getCmsTextBySlot('family-member-3-description') ||
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: getMediaUrl('/family-3.jpeg'),
    },
  ]

  return (
    <section className="py-20 bg-white" id="family">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">Family</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {familyMembers.map((member, index) => (
            <div
              key={member.id}
              className="p-8 transition-transform duration-300 transform border-l-4 border-blue-600 rounded-lg shadow-sm bg-gray-50 hover:scale-105"
            >
              <div className="mb-6 text-center">
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <div className="p-6 mb-4 bg-white shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-48 "
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    {`family-${index + 1}.jpeg`}
                  </HoverCardContent>
                </HoverCard>
              </div>

              <div className="text-center">
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <h3 className="mb-3 text-xl font-medium text-gray-800">{member.name}</h3>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    {`family-member-${index + 1}-name`}
                  </HoverCardContent>
                </HoverCard>
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <p className="leading-relaxed text-gray-600">{member.description}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    {`family-member-${index + 1}-description`}
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Family
