import React from 'react'

const Memories: React.FC = () => {
  const memories = [
    {
      id: 1,
      author: 'Racing Team',
      memory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'August 2025'
    },
    {
      id: 2,
      author: 'F1 Community',
      memory: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'August 2025'
    },
    {
      id: 3,
      author: 'Pit Crew',
      memory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      date: 'August 2025'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="memories">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          Memories & Tributes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memories.map((memory) => (
            <div key={memory.id} className="bg-white p-8 rounded-lg border-l-4 border-red-600 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic text-lg">
                  "{memory.memory}"
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-medium">
                  - {memory.author}
                </span>
                <span className="text-gray-500 text-sm">
                  {memory.date}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 shadow-sm">
            <p className="text-gray-800 font-medium text-xl mb-2">
              Share Your Memories
            </p>
            <small className="text-gray-600">
              Contact us to add your tribute to Thomas
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memories 