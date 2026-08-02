import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import ValueStrip from './sections/ValueStrip'
import Services from './sections/Services'
import Benefits from './sections/Benefits'
import Projects from './sections/Projects'
import Process from './sections/Process'
import Pricing from './sections/Pricing'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueStrip />
        <Services />
        <Benefits />
        <Projects />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
