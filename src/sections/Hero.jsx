import { ArrowRight, Play } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'
import BookingLink from '../components/BookingLink'

export default function Hero() {
  return <section className="hero" id="web-development"><div className="container hero__grid"><div className="hero__copy"><p className="eyebrow"><span /> Website & web app development · NZ</p><h1>Websites and applications shaped around <span>your business.</span></h1><p className="hero__lead">Work directly with the developer planning and building your website or custom application, from initial scope through launch.</p><div className="button-row"><BookingLink>Request a Discovery Call <ArrowRight /></BookingLink><a className="button button--secondary" href="#work" data-event="selected_work_click"><Play /> View Selected Work</a></div><p className="hero__note">Based in Rolleston · Serving businesses across New Zealand</p></div><BrowserMockup context="web" /></div></section>
}
