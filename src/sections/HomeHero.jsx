import { ArrowRight, Code2, Wrench } from 'lucide-react'

export default function HomeHero() {
  return <section className="hero home-hero" id="home">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="eyebrow"><span /> Web development & tech support · NZ</p>
        <h1>Technology that helps your business <span>move forward.</span></h1>
        <p className="hero__lead">ARS Tech Solutions builds practical websites and web applications, while also helping Canterbury businesses and individuals with Windows, computers and everyday IT problems.</p>
        <div className="button-row"><a className="button" href="/web-development">Explore Web Development <ArrowRight /></a><a className="button button--secondary" href="/tech-support"><Wrench /> Get Tech Support</a></div>
        <p className="hero__note">Based in Rolleston · Serving clients across Canterbury and New Zealand</p>
      </div>
      <div className="dual-service-visual" aria-label="Illustration representing web development and technical support">
        <div className="dual-service-card dual-service-card--web"><span><Code2 /></span><small>Build</small><strong>Web Development</strong><p>Websites · Apps · Support</p></div>
        <div className="dual-service-connector"><i /><b>ARS</b><i /></div>
        <div className="dual-service-card dual-service-card--support"><span><Wrench /></span><small>Support</small><strong>Tech Support</strong><p>Windows · Devices · IT help</p></div>
      </div>
    </div>
  </section>
}
