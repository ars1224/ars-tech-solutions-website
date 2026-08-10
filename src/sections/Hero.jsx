import { ArrowRight, Play } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'
import BookingLink from '../components/BookingLink'

export default function Hero() {
  return <section className="hero" id="home">
    <div className="container hero__grid">
      <div className="hero__copy"><p className="eyebrow"><span /> Website & web app development · NZ</p><h1>Websites that work <span>as hard as you do.</span></h1><p className="hero__lead">ARS Tech Solutions creates modern websites and web applications for New Zealand businesses. From planning and design to development and ongoing support, we make the process clear and straightforward.</p><div className="button-row"><BookingLink>Book a Discovery Call <ArrowRight /></BookingLink><a className="button button--secondary" href="#work" data-event="selected_work_click"><Play /> View Selected Work</a></div><p className="hero__note">Based in Rolleston · Serving businesses across New Zealand</p></div>
      <BrowserMockup />
    </div>
  </section>
}
