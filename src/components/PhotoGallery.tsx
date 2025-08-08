import React, { useState } from 'react'

interface Photo {
  id: number
  title: string
  description: string
  image: string
}

interface PhotoSection {
  id: number
  title: string
  description: string
  photos: Photo[]
}

const PhotoGallery: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const photoSections: PhotoSection[] = [
    {
      id: 1,
      title: 'F1 Racing',
      description: 'At the track',
      photos: [
        { id: 1, title: 'Race Day', description: 'Excitement at the track', image: '/images/race-day.jpg' },
        { id: 2, title: 'Pit Stop', description: 'Behind the scenes', image: '/images/pit-stop.jpg' },
        { id: 3, title: 'Victory Lap', description: 'Celebrating success', image: '/images/victory-lap.jpg' },
        { id: 4, title: 'Team Photo', description: 'With the racing team', image: '/images/team-photo.jpg' },
        { id: 5, title: 'Championship', description: 'Winning moments', image: '/images/championship.jpg' }
      ]
    },
    {
      id: 2,
      title: 'Karting Days',
      description: 'Early racing',
      photos: [
        { id: 1, title: 'First Kart', description: 'Learning to race', image: '/images/first-kart.jpg' },
        { id: 2, title: 'Karting Track', description: 'Early competitions', image: '/images/karting-track.jpg' },
        { id: 3, title: 'Training', description: 'Perfecting skills', image: '/images/training.jpg' },
        { id: 4, title: 'Friends', description: 'Racing buddies', image: '/images/friends.jpg' },
        { id: 5, title: 'Trophies', description: 'Early victories', image: '/images/trophies.jpg' }
      ]
    },
    {
      id: 3,
      title: 'Pit Lane',
      description: 'Behind the scenes',
      photos: [
        { id: 1, title: 'Mechanics', description: 'Working on the car', image: '/images/mechanics.jpg' },
        { id: 2, title: 'Strategy', description: 'Planning the race', image: '/images/strategy.jpg' },
        { id: 3, title: 'Equipment', description: 'Racing gear', image: '/images/equipment.jpg' },
        { id: 4, title: 'Team Meeting', description: 'Pre-race briefing', image: '/images/team-meeting.jpg' },
        { id: 5, title: 'Celebration', description: 'Post-race joy', image: '/images/celebration.jpg' }
      ]
    },
    {
      id: 4,
      title: 'Race Day',
      description: 'Excitement',
      photos: [
        { id: 1, title: 'Grid Position', description: 'Starting line', image: '/images/grid-position.jpg' },
        { id: 2, title: 'Overtaking', description: 'Racing action', image: '/images/overtaking.jpg' },
        { id: 3, title: 'Finish Line', description: 'Crossing the line', image: '/images/finish-line.jpg' },
        { id: 4, title: 'Podium', description: 'Celebrating success', image: '/images/podium.jpg' },
        { id: 5, title: 'Fans', description: 'Support from crowd', image: '/images/fans.jpg' }
      ]
    },
    {
      id: 5,
      title: 'Championship',
      description: 'Victory moments',
      photos: [
          { id: 1, title: 'Trophy', description: 'Championship trophy', image: '/images/trophy.jpg' },
        { id: 2, title: 'Medal', description: 'Racing medal', image: '/images/medal.jpg' },
        { id: 3, title: 'Celebration', description: 'Victory celebration', image: '/images/celebration.jpg' },
        { id: 4, title: 'Team Photo', description: 'Championship team', image: '/images/team-photo.jpg' },
        { id: 5, title: 'Memories', description: 'Precious moments', image: '/images/memories.jpg' }
      ]
    },
    {
      id: 6,
      title: 'Speed Dreams',
      description: 'Formula 1 passion',
      photos: [
        { id: 1, title: 'F1 Car', description: 'Dream car', image: '/images/f1-car.jpg' },
        { id: 2, title: 'Helmet', description: 'Racing helmet', image: '/images/helmet.jpg' },
        { id: 3, title: 'Suit', description: 'Racing suit', image: '/images/suit.jpg' },
        { id: 4, title: 'Gloves', description: 'Racing gloves', image: '/images/gloves.jpg' },
        { id: 5, title: 'Future', description: 'Dreams of F1', image: '/images/future.jpg' }
      ]
    }
  ]

  const handleSectionClick = (sectionId: number) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
      setCurrentCarouselIndex(0)
    } else {
      setExpandedSection(sectionId)
      setCurrentCarouselIndex(0)
    }
  }

  const nextCarouselPhoto = () => {
    if (expandedSection) {
      const currentSection = photoSections.find(s => s.id === expandedSection)
      if (currentSection) {
        setCurrentCarouselIndex((prev) => 
          prev === currentSection.photos.length - 1 ? 0 : prev + 1
        )
      }
    }
  }

  const prevCarouselPhoto = () => {
    if (expandedSection) {
      const currentSection = photoSections.find(s => s.id === expandedSection)
      if (currentSection) {
        setCurrentCarouselIndex((prev) => 
          prev === 0 ? currentSection.photos.length - 1 : prev - 1
        )
      }
    }
  }

  const currentSection = expandedSection ? photoSections.find(s => s.id === expandedSection) : null

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16">
          Photo Gallery
        </h2>
        
        {/* Photo Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoSections.map((section) => (
            <div key={section.id} className="group">
              <div 
                className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 aspect-square flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleSectionClick(section.id)}
              >
                <div className="text-red-600 font-medium text-xl mb-2">
                  {section.title}
                </div>
                <div className="text-gray-800 font-medium text-lg mb-1">
                  {section.description}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  {section.photos.length} photos
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  {expandedSection === section.id ? 'Click to collapse' : 'Click to view'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width Animated Carousel Section */}
         
          <div className={`mt-12 bg-gray-50 rounded-lg p-8 transition-all ${expandedSection ? 'opacity-100 duration-1000' : 'opacity-0 h-0 duration-0 '}`} >
            {/* Carousel Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-medium text-gray-800 mb-2">
                {currentSection?.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {currentSection?.description}
              </p>
            </div>

            {/* Carousel Display */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 aspect-video flex items-center justify-center mb-8 shadow-sm">
                <div className="text-center">
                  <div className="text-red-600 font-medium text-3xl mb-4">
                    {currentSection?.photos[currentCarouselIndex].title}
                  </div>
                  <div className="text-gray-600 text-xl mb-4">
                    {currentSection?.photos[currentCarouselIndex].description}
                  </div>
                  <div className="text-gray-500 text-lg">
                    Photo {currentCarouselIndex + 1} of {currentSection?.photos.length}
                  </div>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevCarouselPhoto}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  ← Previous
                </button>
                
                <div className="flex space-x-3">
                  {currentSection?.photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCarouselIndex(index)}
                      className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                        index === currentCarouselIndex 
                          ? 'bg-red-600' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextCarouselPhoto}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  )
}

export default PhotoGallery 