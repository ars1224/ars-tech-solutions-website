import { ArrowRight, MessageCircle } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'
import BookingLink from '../components/BookingLink'

export default function HomeHero() {
  return <section className="hero home-hero" id="home">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="eyebrow"><span /> Web design & development · Rolleston</p>
        <h1>Websites and web applications for <span>Canterbury businesses.</span></h1>
        <p className="hero__lead">Founder-led web design and development from Rolleston for businesses in Christchurch, across Canterbury and throughout New Zealand.</p>
        <div className="button-row"><BookingLink><MessageCircle /> Let’s Chat</BookingLink><a className="button button--secondary" href="#work" data-event="selected_work_click">View Selected Work <ArrowRight /></a></div>
        <p className="hero__note">Direct developer access <b>·</b> Clear scope <b>·</b> Ongoing support</p>
      </div>
      <BrowserMockup context="home" />
    </div>
  </section>
}
