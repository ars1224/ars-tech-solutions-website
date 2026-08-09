import HomeHero from '../sections/HomeHero'
import ValueStrip from '../sections/ValueStrip'
import ServicePaths from '../sections/ServicePaths'
import Benefits from '../sections/Benefits'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function HomePage() {
  return <>
    <HomeHero />
    <ValueStrip />
    <ServicePaths />
    <Benefits home />
    <About />
    <Contact />
  </>
}
