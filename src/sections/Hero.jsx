import { ArrowRight, BadgeDollarSign } from 'lucide-react'
import BrowserMockup from '../components/BrowserMockup'
import BookingLink from '../components/BookingLink'

export default function Hero() {
  return <section className="hero" id="web-development"><div className="container hero__grid"><div className="hero__copy"><p className="eyebrow"><span /> Web design & development · New Zealand</p><h1>Web design and development for <span>New Zealand businesses.</span></h1><p className="hero__lead">ARS Tech Solutions builds business websites, website redesigns and custom web applications from Rolleston for clients across Canterbury and New Zealand.</p><div className="button-row"><BookingLink>Free Consultation <ArrowRight /></BookingLink><a className="button button--secondary" href="#pricing"><BadgeDollarSign /> View Website Pricing</a></div><p className="hero__note">Not sure where to start? Let’s look at the useful options with no obligation.</p></div><BrowserMockup context="web" /></div></section>
}
