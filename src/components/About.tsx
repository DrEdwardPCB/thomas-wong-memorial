import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          About Thomas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
              <p className="text-gray-700 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 leading-relaxed text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
              <p className="text-gray-600 text-lg mb-2">About Photo</p>
              <small className="text-gray-500">Add a photo of Thomas here</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 