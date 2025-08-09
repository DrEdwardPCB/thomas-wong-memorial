import React from 'react'
import './App.css'
import { DataProvider, useData } from './contexts/DataContext'
import Loading from './components/Loading'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import PhotoGallery from './components/PhotoGallery'
import Memories from './components/Memories'
import Family from './components/Family'
import Contact from './components/Contact'

const AppContent: React.FC = () => {
  const { isLoading, error } = useData()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-light text-gray-800">Thomas Wong 王顥銘</h1>
          <p className="mb-4 text-red-600">Error loading memorial data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 text-white bg-red-600 rounded-lg transition-colors hover:bg-red-700"
          >
            Reload
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Hero />
      <About />
      <Timeline />
      <PhotoGallery />
      <Memories />
      <Family />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  )
}

export default App
