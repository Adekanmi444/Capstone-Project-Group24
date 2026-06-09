import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Planets from './components/Planets'
import PlanetaryTable from './components/PlanetaryTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoSection />
      <Planets />
      <PlanetaryTable />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App