import { ArrowRight, MapPin, Radio, MessageCircle, Target } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import BrowserMockup from '../components/BrowserMockup'
const facts = [[MapPin,'Based in Rolleston, Canterbury'],[Radio,'Serving clients across New Zealand'],[MessageCircle,'Friendly, straightforward communication'],[Target,'Solutions shaped around real business needs']]
export default function About({ summary = false }) {
  const copy = summary
    ? 'ARS Tech Solutions provides practical web development and technology support for small and growing New Zealand businesses. You work directly with the person doing the work, keeping communication clear and personal.'
    : 'ARS Tech Solutions is a New Zealand-based digital service focused on practical websites, web applications and everyday technology support. Clients work directly with the developer and support provider throughout the process, helping keep communication simple, transparent and efficient. Every recommendation is shaped around a real business need—not unnecessary complexity.'

  return <section className="section section--tint" id="about"><div className="container about-grid"><div><SectionHeading eyebrow="About ARS Tech Solutions" title={summary ? 'Local technology help with a personal approach' : 'Practical digital solutions, delivered personally'} align="left" level={summary ? 2 : 1} /><p className="about-copy">{copy}</p><div className="facts">{facts.map(([Icon,text]) => <div key={text}><Icon/><span>{text}</span></div>)}</div>{summary && <div className="button-row"><a className="button button--secondary" href="/about">More About ARS Tech Solutions <ArrowRight /></a></div>}</div><div className="about-project-visual"><BrowserMockup context="about" /></div></div></section>
}
