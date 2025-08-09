import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Memorial loading animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Outer circle */}
            <div className="w-32 h-32 border-4 border-gray-200 rounded-full animate-spin border-t-red-600 mx-auto mb-4"></div>
            {/* Inner circle */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-gray-100 rounded-full animate-spin border-t-blue-600" style={{animationDirection: 'reverse', animationDuration: '2s'}}></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            Thomas Wong
          </h1>
          <div className="text-xl md:text-2xl display-font text-red-600 mb-4">
            王顥銘
          </div>
        </div>

        {/* Loading message */}
        <div className="text-gray-600">
          <p className="text-lg mb-2">Loading memories...</p>
          <div className="flex justify-center items-center space-x-1">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
