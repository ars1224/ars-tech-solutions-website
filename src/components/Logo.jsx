import logoImage from '../assets/ars-tech-solutions-logo-transparent.webp'

export default function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="/" aria-label="ARS Tech Solutions home">
      <img src={logoImage} alt="ARS Tech Solutions" width="156" height="58" />
    </a>
  )
}
