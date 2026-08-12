import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import BookingLink from '../components/BookingLink'
import { founder } from '../config/siteSettings'

const capabilities = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Flask', 'PHP', 'C#', 'SQL', 'PostgreSQL']
const platforms = ['AWS', 'Netlify', 'GitHub']

export default function AboutPageContent() {
  return <>
    <section className="about-page-hero section"><div className="container about-page-hero__grid"><div><p className="eyebrow">About ARS Tech Solutions</p><h1>Founder-led web development, based in Canterbury.</h1><p>ARS Tech Solutions is a founder-led web development business based in Rolleston, Canterbury. We create practical, modern websites and custom web applications for businesses, with selected technology support services also available.</p><div className="button-row"><BookingLink /><a className="button button--secondary" href="/work">View Selected Work <ArrowRight /></a></div></div><div className="about-page-mark" aria-label="ARS Tech Solutions service area"><p className="about-page-mark__eyebrow">Based in Rolleston</p><strong>Direct web development for businesses across New Zealand.</strong><div><span>Planning</span><span>Design</span><span>Development</span><span>Launch</span></div><p>Canterbury · New Zealand</p></div></div></section>
    <section className="section founder-data-section"><div className="container founder-data-section__grid">
      <div>{founder.photograph && <img className="founder-photo founder-photo--large" src={founder.photograph} alt="Jhon Aries Tayao, Founder and Web Developer at ARS Tech Solutions" width="900" height="1125" fetchPriority="high" />}</div>
      <div><p className="eyebrow">Meet the Founder</p><h2>{founder.name}</h2><p className="founder-role">{founder.role}</p>
        <p>I’m Jhon Aries Tayao, the founder of ARS Tech Solutions. My background combines software development, web development and hands-on IT support, giving me a practical understanding of both building technology and helping people use it effectively.</p>
        <p>I hold a New Zealand Certificate in Information Technology (Level 5) from Yoobee Colleges and am currently studying toward a Diploma in Software Development (Level 6).</p>
        <p>My primary focus is designing and developing business websites, website redesigns and custom web applications. I also provide selected technology support services for individuals and small businesses in Canterbury.</p>
        <p>I believe good technology should be clear, practical and shaped around the people who use it. When you work with ARS Tech Solutions, you work directly with me throughout your project—from the initial conversation and planning through development, launch and ongoing improvements.</p>
        <p>This direct approach means clearer communication, fewer handovers and a solution that stays connected to the original business goal.</p>
        <p className="founder-location"><MapPin /> Based in Rolleston, Canterbury · Available for projects across New Zealand</p>
        <div className="founder-links"><a href={founder.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink /></a><a href={founder.github} target="_blank" rel="noreferrer">GitHub <ExternalLink /></a></div>
        <div className="button-row"><BookingLink /><a className="button button--secondary" href="/work">View Selected Work <ArrowRight /></a></div>
      </div>
    </div></section>
    <section className="section section--tint credentials-section"><div className="container"><p className="eyebrow">Qualifications</p><div className="credentials-grid">{founder.qualifications.map(item => <article key={item.name}><h2>{item.name}</h2><p>{item.provider}</p><span>{item.status}</span></article>)}</div></div></section>
    <section className="section capabilities-section"><div className="container"><p className="eyebrow">Technical evidence</p><h2>Technical Capabilities</h2><p>My development experience includes:</p><div className="capability-chips">{capabilities.map(item => <span key={item}>{item}</span>)}</div><p>I also work with deployment and collaboration platforms including:</p><div className="capability-chips">{platforms.map(item => <span key={item}>{item}</span>)}</div></div></section>
  </>
}
