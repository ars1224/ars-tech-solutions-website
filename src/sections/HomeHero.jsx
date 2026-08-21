import { ArrowRight, CalendarDays } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'
import BookingLink from '../components/BookingLink'

export default function HomeHero() {
  return <section className="hero home-hero" id="home">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="eyebrow"><span /> Canterbury web development studio</p>
        <h1>Websites and web applications built around <span>real business needs.</span></h1>
        <p className="hero__lead">Founder-led website design and custom web application development from Rolleston, serving Canterbury businesses and clients across New Zealand.</p>
        <div className="button-row"><BookingLink><CalendarDays /> Request a Discovery Call</BookingLink><a className="button button--secondary" href="#work" data-event="selected_work_click">View Selected Work <ArrowRight /></a></div>
        <p className="hero__note">Based in Canterbury <b>·</b> Working across New Zealand</p>
      </div>
      <BrowserMockup context="home" />
    </div>
  </section>
}
