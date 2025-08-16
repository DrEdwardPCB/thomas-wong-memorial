import React from 'react'
import { useData } from '../contexts/DataContext'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const Memories: React.FC = () => {
  const { memoriesTributes } = useData()

  return (
    <section className="py-20 bg-gray-50" id="memories">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          Memories & Tributes
        </h2>

        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {memoriesTributes.map(memory => (
            <HoverCard closeDelay={5000} key={memory.id}>
              <HoverCardTrigger asChild>
                <div
                  className={`${memory.text.length > 150 ? 'row-span-2' : ''} p-8 transition-transform duration-300 transform bg-white border-l-4 border-red-600 rounded-lg shadow-sm hover:scale-105`}
                >
                  <div className="mb-6">
                    <p className="text-lg italic leading-relaxed text-gray-700">"{memory.text}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-red-600">
                      {memory.show_name ? `- ${memory.name}` : '- Anonymous'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(memory.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="px-4 py-2 text-white bg-gray-600 rounded shadow-lg">
                {`cms-memories-tribute.${memory.id}`}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-6 py-3 text-sm font-bold text-white transition-transform duration-300 transform bg-red-600 rounded-lg racing-font hover:scale-105">
            <p className="mb-2 text-xl font-medium">Share Your Memories</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScjJOg35f6Bwvpr9OjRallaQTFmxobk9E6Dmpza5-SvIL8LEA/viewform?usp=dialog">
              <small className="text-gray-200">Contact us to add your tribute to Thomas</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memories
