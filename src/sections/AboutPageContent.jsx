import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import BookingLink from '../components/BookingLink'
import { founder } from '../config/siteSettings'

const capabilities = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Flask', 'PHP', 'C#', 'SQL', 'PostgreSQL']
const platforms = ['AWS', 'Netlify', 'GitHub']

export default function AboutPageContent() {
  return <>
    <section className="about-page-hero section"><div className="container about-page-hero__grid"><div><p className="eyebrow">About ARS Tech Solutions</p><h1>Founder-led web development in Rolleston, Canterbury.</h1><p>ARS Tech Solutions is run by Jhon Aries Tayao. Clients work directly with Jhon to plan and build business websites, redesigns and custom web applications.</p><div className="button-row"><BookingLink>Let’s Chat</BookingLink><a className="button button--secondary" href="/work">View Case Studies <ArrowRight /></a></div></div><div className="about-page-mark" aria-label="How ARS Tech Solutions works"><p className="about-page-mark__eyebrow">Direct from start to finish</p><strong>Plan, build and improve your website with the same developer.</strong><div><span>Planning</span><span>Design</span><span>Development</span><span>Launch</span></div><p>Web projects across New Zealand</p></div></div></section>
    <section className="section founder-data-section"><div className="container founder-data-section__grid">
      <div className="founder-data-section__portrait">{founder.photograph && <img className="founder-photo founder-photo--large" src={founder.photograph} alt="Jhon Aries Tayao, Founder and Web Developer at ARS Tech Solutions" width="900" height="1125" fetchPriority="high" />}</div>
      <div><p className="eyebrow">Meet the Founder</p><h2>{founder.name}</h2><p className="founder-role">{founder.role}</p>
        <p>My background covers software development, web development and hands-on IT support. That mix helps me build useful systems and explain technical choices clearly.</p>
        <p>I hold a New Zealand Certificate in Information Technology (Level 5) from Yoobee Colleges.</p>
        <p>I focus on business websites, website redesigns and custom web applications, with selected technology support available in Canterbury.</p>
        <p>When you work with ARS Tech Solutions, you work directly with me from the first conversation through planning, development, launch and future improvements.</p>
        <p className="founder-location"><MapPin /> Based in Rolleston, Canterbury · Available for projects across New Zealand</p>
        <p className="founder-portfolio-note">Built by ARS is my separate portfolio for development work outside the ARS case studies.</p>
        <div className="founder-links"><a href={founder.developerPortfolio} target="_blank" rel="noopener noreferrer">Developer Portfolio <ExternalLink /></a><a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink /></a><a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink /></a></div>
      </div>
    </div></section>
    <section className="section capabilities-section"><div className="container"><p className="eyebrow">Development capabilities</p><h2>Technologies used across ARS projects</h2><p>My development experience includes:</p><div className="capability-chips">{capabilities.map(item => <span key={item}>{item}</span>)}</div><p>Deployment and collaboration platforms:</p><div className="capability-chips">{platforms.map(item => <span key={item}>{item}</span>)}</div></div></section>
  </>
}
