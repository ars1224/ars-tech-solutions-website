import { ArrowRight, CheckCircle2, MonitorCog, ShieldCheck, Wrench } from 'lucide-react'

export default function TechSupportHero() {
  return <section className="hero tech-hero" id="tech-support">
    <div className="container hero__grid">
      <div className="hero__copy"><p className="eyebrow"><span /> Practical local IT assistance</p><h1>Straightforward tech support <span>when you need it.</span></h1><p className="hero__lead">From Windows reformats and slow computers to software, email, device and everyday IT troubleshooting, ARS Tech Solutions makes technical support easier to understand.</p><div className="button-row"><a className="button" href="#contact">Request Tech Support <ArrowRight /></a><a className="button button--secondary" href="#tech-support-services"><Wrench /> View Support Services</a></div><p className="hero__note">Rolleston-based · Support options confirmed during consultation</p></div>
      <div className="support-visual" role="img" aria-label="Illustration of a computer health and technical support dashboard"><div className="support-visual__window"><div className="support-visual__bar"><i/><i/><i/><span>Device support</span></div><div className="support-visual__body"><div className="support-device"><MonitorCog/></div><div className="support-checks"><div><CheckCircle2/><span>Windows setup</span></div><div><CheckCircle2/><span>Troubleshooting</span></div><div><CheckCircle2/><span>Device support</span></div></div></div></div><div className="support-badge"><ShieldCheck/><span>Clear, practical help</span></div></div>
    </div>
  </section>
}
