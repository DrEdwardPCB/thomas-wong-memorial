import React, { useState } from 'react'
import { useData, type PhotoSection } from '../contexts/DataContext'

const PhotoGallery: React.FC = () => {
  const { getPhotoSections } = useData()
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const photoSections: PhotoSection[] = getPhotoSections()

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
        setCurrentCarouselIndex(prev => (prev === currentSection.photos.length - 1 ? 0 : prev + 1))
      }
    }
  }

  const prevCarouselPhoto = () => {
    if (expandedSection) {
      const currentSection = photoSections.find(s => s.id === expandedSection)
      if (currentSection) {
        setCurrentCarouselIndex(prev => (prev === 0 ? currentSection.photos.length - 1 : prev - 1))
      }
    }
  }

  const currentSection = expandedSection ? photoSections.find(s => s.id === expandedSection) : null

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="px-4 mx-auto max-w-6xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          Photo Gallery
        </h2>

        {/* Photo Sections Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photoSections.map(section => (
            <div key={section.id} className="group">
              <div
                className={`flex relative justify-center items-center p-8 text-center rounded rounded-lg border-2 transition-transform duration-300 transform cursor-pointer reflex-col aspect-square hover:scale-105`}
                onClick={() => handleSectionClick(section.id)}
              >
                <img
                  className="object-cover absolute top-0 right-0 left-0 rounded-lg bottom-[50%] aspect-square"
                  src={section.photos[0].image}
                ></img>
                <div className="absolute right-0 bottom-0 left-0 p-4 bg-gray-300 rounded-bottom-lg">
                  <div className="mb-2 text-xl font-medium text-red-600">{section.title}</div>
                  <div className="mb-1 text-lg font-medium text-gray-800">
                    {section.description}
                  </div>
                  <div className="mb-2 text-sm text-gray-600">{section.photos.length} photos</div>
                  <div className="mt-4 text-xs text-gray-500">
                    {expandedSection === section.id ? 'Click to collapse' : 'Click to view'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width Animated Carousel Section */}

        <div
          className={`mt-12 bg-gray-50 rounded-lg p-8 transition-all ${expandedSection ? 'opacity-100 duration-1000' : 'h-0 opacity-0 duration-0'}`}
        >
          {/* Carousel Header */}
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-3xl font-medium text-gray-800">{currentSection?.title}</h3>
            <p className="text-lg text-gray-600">{currentSection?.description}</p>
          </div>

          {/* Carousel Display */}
          <div className="mx-auto max-w-4xl">
            <div className="flex relative justify-center items-center mb-8 bg-white rounded-lg border-2 border-gray-300 border-dashed shadow-sm aspect-video">
              <img
                className={'object-contain rounded-xl shadow h-150'}
                src={currentSection?.photos[currentCarouselIndex].image}
                alt={currentSection?.photos[currentCarouselIndex].title}
              />
              <div
                className={`absolute bottom-0 left-0 p-4 m-4 text-center bg-gray-300 rounded-lg shadow-lg opacity-90`}
              >
                <div className="mb-4 text-3xl font-medium text-red-600">
                  {currentSection?.photos[currentCarouselIndex].title}
                </div>
                <div className="mb-4 text-xl text-gray-600">
                  {currentSection?.photos[currentCarouselIndex].description}
                </div>
                <div className="text-lg text-gray-500">
                  Photo {currentCarouselIndex + 1} of {currentSection?.photos.length}
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevCarouselPhoto}
                className="px-8 py-4 font-medium text-gray-700 bg-gray-200 rounded-lg transition-colors duration-200 hover:bg-gray-300"
              >
                ← Previous
              </button>

              <div className="flex space-x-3">
                {currentSection?.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                      index === currentCarouselIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCarouselPhoto}
                className="px-8 py-4 font-medium text-gray-700 bg-gray-200 rounded-lg transition-colors duration-200 hover:bg-gray-300"
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
