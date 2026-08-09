import projectScreenshot from '../assets/projects/kiss-web-dashboard.png'

export default function BrowserMockup({ context = 'hero' }) {
  return <div className={`browser-art browser-art--${context}`} role="img" aria-label="ARS branded laptop mockup displaying the KISS-Web inventory dashboard">
    <div className="browser-art__bar"><span /><span /><span /><div>arstechsolutions.com</div></div>
    <div className="browser-art__screen">
      <img className="browser-art__project" src={projectScreenshot} alt="" />
      <div className="browser-art__caption"><span>Featured build</span><strong>KISS-Web</strong></div>
    </div>
    <div className="code-chip code-chip--one">Responsive</div>
    <div className="code-chip code-chip--two">Real project</div>
  </div>
}
