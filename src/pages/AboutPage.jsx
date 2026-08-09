import About from '../sections/About'
import Benefits from '../sections/Benefits'
import Contact from '../sections/Contact'

export default function AboutPage() {
  return <>
    <About />
    <Benefits home />
    <Contact context="about" />
  </>
}
