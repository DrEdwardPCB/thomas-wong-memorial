import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import PhotoGallery from './components/PhotoGallery'
import Memories from './components/Memories'
import Family from './components/Family'
import Contact from './components/Contact'

function App() {
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

export default App
