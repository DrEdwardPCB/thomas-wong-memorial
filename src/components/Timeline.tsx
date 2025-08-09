import React from 'react'
import { useData } from '../contexts/DataContext'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const Timeline: React.FC = () => {
  const { getCmsTextBySlot } = useData()
  const timelineEvents = [
    {
      date: getCmsTextBySlot('timeline-date-1') || 'April 25, 2001',
      title: getCmsTextBySlot('timeline-title-1') || 'Birth',
      description:
        getCmsTextBySlot('timeline-description-1') ||
        "You don't remember how you transformed from a little baby into a tall teenager? I seem to have forgotten the details. Once, I was very stubborn, many complaints, often blaming others. I had the strongest mother in the world, twisting and turning to embrace my babyhood and childhood. My father was my best life mentor, designing to train me into a steel man. My brother was my navigator, accompanying and encouraging me to walk every step. If you have the chance to meet my parents and brother, you can try to ask them about any problem in your life, they are like a comprehensive encyclopedia, any topic will have a deep discussion with you.",
    },
    {
      date: getCmsTextBySlot('timeline-date-2') || '2005',
      title: getCmsTextBySlot('timeline-title-2') || 'First F1 Race',
      description:
        getCmsTextBySlot('timeline-description-2') ||
        'My best friends from primary school were an indispensable part of my growth. Only we knew how幼稚 we were, how we struggled to grow up, and how we became our own selves. Then we went back to church, accepted Jesus as our Savior, what a blessing and grace.',
    },
    {
      date: getCmsTextBySlot('timeline-date-3') || '2010',
      title: getCmsTextBySlot('timeline-title-3') || 'Karting Begins',
      description:
        getCmsTextBySlot('timeline-description-3') ||
        '小學時期的摯友們，是我人生其中不可或缺的成長夥伴。只有我們知道彼此曾經如何幼稚，只有我們知道彼此如何突破成長的掙扎，活出成長為一個自己接受的一個自己。然後我們一起返教會，接受主基督為救主，是多大的祝福和恩典。',
    },
    {
      date: getCmsTextBySlot('timeline-date-4') || '2015',
      title: getCmsTextBySlot('timeline-title-4') || 'Racing Passion',
      description:
        getCmsTextBySlot('timeline-description-4') ||
        '中學同學們，我是不是你們眼中的怪咖? 成長中，我們可能會是任何人眼中的怪咖。這段時間，信仰上在追求和辨識，學識中在追求原本屬於我的卓越，在電競上去尋找方向，音樂及事奉上我在學習如何為主付出。慢慢，我鋪出到一條屬于自己不一樣的路，你呢?',
    },
    {
      date: getCmsTextBySlot('timeline-date-5') || '2020',
      title: getCmsTextBySlot('timeline-title-5') || 'Formula 1 Dreams',
      description:
        getCmsTextBySlot('timeline-description-5') ||
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      date: getCmsTextBySlot('timeline-date-6') || 'August 3, 2025',
      title: getCmsTextBySlot('timeline-title-6') || 'Final Lap',
      description:
        getCmsTextBySlot('timeline-description-6') ||
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="px-4 mx-auto max-w-4xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-blue-600 to-yellow-500"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-6 h-6 bg-red-600 rounded-full flex items-center justify-center z-10 border-2 border-white shadow-md ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}
                >
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>

                <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} flex-1`}>
                  <div className="p-6 bg-white rounded-lg border-l-4 border-red-600 shadow-sm">
                    <HoverCard closeDelay={5000}>
                      <HoverCardTrigger asChild>
                        <div className="mb-2 text-lg font-medium text-red-600">{event.date}</div>
                      </HoverCardTrigger>
                      <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                        {`timeline-date-${index + 1}`}
                      </HoverCardContent>
                    </HoverCard>
                    <HoverCard closeDelay={5000}>
                      <HoverCardTrigger asChild>
                        <h3 className="mb-2 text-xl font-medium text-gray-800">{event.title}</h3>
                      </HoverCardTrigger>
                      <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                        {`timeline-title-${index + 1}`}
                      </HoverCardContent>
                    </HoverCard>
                    <HoverCard closeDelay={5000}>
                      <HoverCardTrigger asChild>
                        <p className="leading-relaxed text-gray-600">{event.description}</p>
                      </HoverCardTrigger>
                      <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                        {`timeline-description-${index + 1}`}
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
