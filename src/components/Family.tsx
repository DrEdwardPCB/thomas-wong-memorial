import React from 'react'

const Family: React.FC = () => {
  const familyMembers = [
    {
      id: 1,
      name: 'Racing Family',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'racing-family'
    },
    {
      id: 2,
      name: 'Pit Crew',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pit-crew'
    },
    {
      id: 3,
      name: 'F1 Community',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'f1-community'
    }
  ]

  return (
    <section className="py-20 bg-white" id="family">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          Family
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600 transform hover:scale-105 transition-transform duration-300 shadow-sm">
              <div className="text-center mb-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                  <p className="text-gray-600 font-medium text-lg mb-1">
                    {member.image}
                  </p>
                  <small className="text-gray-500">Family Photo</small>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-gray-800 font-medium text-xl mb-3">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Family 