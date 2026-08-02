export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return <div className={`section-heading section-heading--${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}
