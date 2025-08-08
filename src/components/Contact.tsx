import React from 'react'

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          Contact & Tributes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-red-600 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Honoring Thomas's Legacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600 shadow-sm">
              <h4 className="text-xl font-medium text-gray-800 mb-3">
                Share Memories
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <small className="text-gray-600">
                Email us to add your tribute
              </small>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-500 shadow-sm">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <p className="text-gray-700">
                  <span className="text-red-600 font-medium">Email:</span> contact@thomasracing.com
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Phone:</span> (555) 123-4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-700">
                  <span className="text-yellow-600 font-medium">Address:</span> Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 