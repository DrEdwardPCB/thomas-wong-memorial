import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useData, type PhotoSection } from '../contexts/DataContext'

const PhotoGallery: React.FC = () => {
  const { getPhotoSections } = useData()
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const photoSections: PhotoSection[] = getPhotoSections()

  const handleSectionClick = (sectionId: number) => {
    setExpandedSection(sectionId)
    setCurrentCarouselIndex(0)
  }

  const handleCloseDialog = () => {
    setExpandedSection(null)
    setCurrentCarouselIndex(0)
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
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(249,250,252,.6)] rounded-b-lg">
                  <div className="mb-2 text-xl font-medium text-red-600">{section.title}</div>
                  <div className="mb-1 text-lg font-medium text-gray-800">
                    {section.description}
                  </div>
                  <div className="mb-2 text-sm text-gray-600">{section.photos.length} photos</div>
                  <div className="mt-4 text-xs text-gray-500">Click to view</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MUI Dialog for Carousel */}
        <Dialog
          open={!!expandedSection}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
            },
          }}
        >
          <DialogTitle className="pb-2 text-center">
            <div className="flex justify-between items-center">
              <div className="flex-1 text-center">
                <h3 className="text-3xl font-medium text-gray-800">{currentSection?.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{currentSection?.description}</p>
              </div>
              <IconButton onClick={handleCloseDialog} className="ml-auto" size="large">
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>

          <DialogContent className="pt-0">
            <div className="mx-auto max-w-4xl">
              {/* Carousel Display */}
              <div className="flex relative justify-center items-center rounded-lg shadow-sm p-6bg-white aspect-video">
                <img
                  className={'object-contain h-auto md:h-150'}
                  src={currentSection?.photos[currentCarouselIndex].image}
                  alt={currentSection?.photos[currentCarouselIndex].title}
                />
                <div
                  className={`absolute bottom-0 left-0 invisible p-4 m-4 text-center bg-gray-300 rounded-lg shadow-lg opacity-90 md:visible`}
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
              <div
                className={`visible p-4 m-4 text-center bg-gray-300 rounded-lg shadow-lg opacity-90 md:invisible md:h-0`}
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
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center h-20">
                <button
                  onClick={prevCarouselPhoto}
                  className="px-8 py-4 font-medium text-gray-700 bg-gray-200 rounded-lg transition-colors duration-200 hover:bg-gray-300"
                >
                  ← Previous
                </button>
                <div className="flex invisible flex-wrap gap-1 m-4 space-x-3 md:visible">
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
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default PhotoGallery
