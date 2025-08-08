import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative">
      {/* Subtle racing background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-600 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-600 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-yellow-500 rounded-full animate-spin" style={{animationDuration: '35s'}}></div>
      </div>
      
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-4">
            Thomas Wong
          </h1>
          <div className="text-2xl md:text-4xl display-font text-red-600 mb-2">
            王顥銘
          </div>
        </div>
        
        <div className="mb-8">
          <div className="text-xl md:text-2xl text-gray-600 mb-2">
            April 25, 2001 - August 3, 2025
          </div>
          <div className="text-lg md:text-xl text-gray-500 italic">
            Forever in our hearts
          </div>
        </div>
        
        <div className="mt-12">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg racing-font font-bold text-sm transform hover:scale-105 transition-transform duration-300">
            FORMULA 1 ENTHUSIAST
          </div>
        </div>
        
        <div className="mt-8">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-gray-600 text-lg mb-2">Hero Image</p>
            <small className="text-gray-500">Add a beautiful photo of Thomas here</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 