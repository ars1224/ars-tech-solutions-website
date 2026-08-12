import { ArrowRight } from 'lucide-react'
import { founder } from '../config/siteSettings'

export default function FounderPreview() {
  return <section className="section founder-section"><div className="container founder-section__grid">
    {founder.photograph && <img className="founder-photo" src={founder.photograph} alt="Jhon Aries Tayao, Founder and Web Developer at ARS Tech Solutions" width="900" height="1125" loading="lazy" decoding="async" />}
    <div className="founder-copy"><p className="eyebrow">Meet the Founder</p><h2>{founder.name}</h2><p className="founder-role">{founder.role}</p><p>{founder.shortBiography}</p><a className="button button--secondary" href="/about">More About ARS <ArrowRight /></a></div>
  </div></section>
}
