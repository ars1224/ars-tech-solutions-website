export default function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#home" aria-label="ARS Tech Solutions home">
      <span className="logo__mark" aria-hidden="true"><span>&lt;</span><b>ARS</b><span>/&gt;</span></span>
      <span className="logo__text"><strong>ARS Tech</strong><small>Solutions</small></span>
    </a>
  )
}
