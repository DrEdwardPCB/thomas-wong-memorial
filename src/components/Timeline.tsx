import React from 'react'

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      date: 'April 25, 2001',
      title: 'Birth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      date: '2005',
      title: 'First F1 Race',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      date: '2010',
      title: 'Karting Begins',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      date: '2015',
      title: 'Racing Passion',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      date: '2020',
      title: 'Formula 1 Dreams',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      date: 'August 3, 2025',
      title: 'Final Lap',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-blue-600 to-yellow-500"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-6 h-6 bg-red-600 rounded-full flex items-center justify-center z-10 border-2 border-white shadow-md ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                
                <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} flex-1`}>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                    <div className="text-red-600 font-medium text-lg mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-gray-800 font-medium text-xl mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
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