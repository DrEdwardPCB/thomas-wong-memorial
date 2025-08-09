import React from 'react'
import { useData } from '../contexts/DataContext'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const Contact: React.FC = () => {
  const { getCmsTextBySlot } = useData()

  const legacyTitle = getCmsTextBySlot('contact-legacy-title') || "Honoring Thomas's Legacy"
  const legacyText =
    getCmsTextBySlot('contact-legacy-text') ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  const memoriesTitle = getCmsTextBySlot('contact-memories-title') || 'Share Memories'
  const memoriesText =
    getCmsTextBySlot('contact-memories-text') ||
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  const memoriesSubtext =
    getCmsTextBySlot('contact-memories-subtext') || 'Email us to add your tribute'

  const contactTitle = getCmsTextBySlot('contact-info-title') || 'Get in Touch'
  const contactEmail = getCmsTextBySlot('contact-email') || 'contact@thomasracing.com'
  const contactPhone = getCmsTextBySlot('contact-phone') || '(555) 123-4567'
  const contactAddress = getCmsTextBySlot('contact-address') || 'Lorem ipsum dolor sit amet'

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="px-4 mx-auto max-w-6xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          Contact & Tributes
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-lg border-l-4 border-red-600 shadow-sm">
              <HoverCard closeDelay={5000}>
                <HoverCardTrigger asChild>
                  <h3 className="mb-4 text-2xl font-medium text-gray-800">{legacyTitle}</h3>
                </HoverCardTrigger>
                <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                  contact-legacy-title
                </HoverCardContent>
              </HoverCard>
              <HoverCard closeDelay={5000}>
                <HoverCardTrigger asChild>
                  <p className="leading-relaxed text-gray-700">{legacyText}</p>
                </HoverCardTrigger>
                <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                  contact-legacy-text
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="p-8 bg-white rounded-lg border-l-4 border-blue-600 shadow-sm">
              <HoverCard closeDelay={5000}>
                <HoverCardTrigger asChild>
                  <h4 className="mb-3 text-xl font-medium text-gray-800">{memoriesTitle}</h4>
                </HoverCardTrigger>
                <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                  contact-memories-title
                </HoverCardContent>
              </HoverCard>
              <HoverCard closeDelay={5000}>
                <HoverCardTrigger asChild>
                  <p className="mb-3 leading-relaxed text-gray-700">{memoriesText}</p>
                </HoverCardTrigger>
                <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                  contact-memories-text
                </HoverCardContent>
              </HoverCard>
              <HoverCard closeDelay={5000}>
                <HoverCardTrigger asChild>
                  <small className="text-gray-600">{memoriesSubtext}</small>
                </HoverCardTrigger>
                <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                  contact-memories-subtext
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg border-l-4 border-yellow-500 shadow-sm">
            <HoverCard closeDelay={5000}>
              <HoverCardTrigger asChild>
                <h3 className="mb-6 text-2xl font-medium text-gray-800">{contactTitle}</h3>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                contact-info-title
              </HoverCardContent>
            </HoverCard>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <p className="text-gray-700">
                      <span className="font-medium text-red-600">Email:</span> {contactEmail}
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    contact-email
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <p className="text-gray-700">
                      <span className="font-medium text-blue-600">Phone:</span> {contactPhone}
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    contact-phone
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <HoverCard closeDelay={5000}>
                  <HoverCardTrigger asChild>
                    <p className="text-gray-700">
                      <span className="font-medium text-yellow-600">Address:</span> {contactAddress}
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                    contact-address
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
