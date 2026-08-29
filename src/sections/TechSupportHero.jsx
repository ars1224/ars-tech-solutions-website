import { ArrowRight, CheckCircle2, MonitorCog, ShieldCheck, Wrench } from 'lucide-react'

export default function TechSupportHero() {
  return <section className="hero tech-hero" id="tech-support">
    <div className="container hero__grid">
      <div className="hero__copy"><p className="eyebrow"><span /> Local computer & IT help</p><h1>Tech support in <span>Rolleston and Canterbury.</span></h1><p className="hero__lead">Practical help with Windows setup, slow computers, software, email, devices and everyday small-business IT.</p><div className="button-row"><a className="button" href="#contact">Request Tech Support <ArrowRight /></a><a className="button button--secondary" href="#tech-support-services"><Wrench /> View Support Services</a></div><p className="hero__note">Clear advice · Scope and likely cost confirmed before work begins</p></div>
      <div className="support-visual" role="img" aria-label="Illustration of a computer health and technical support dashboard"><div className="support-visual__window"><div className="support-visual__bar"><i/><i/><i/><span>Device support</span></div><div className="support-visual__body"><div className="support-device"><MonitorCog/></div><div className="support-checks"><div><CheckCircle2/><span>Windows setup</span></div><div><CheckCircle2/><span>Troubleshooting</span></div><div><CheckCircle2/><span>Device support</span></div></div></div></div><div className="support-badge"><ShieldCheck/><span>Clear, practical help</span></div></div>
    </div>
  </section>
}
