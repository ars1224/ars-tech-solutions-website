export default function SectionHeading({ eyebrow, title, text, align = 'center', level = 2 }) {
  const Heading = `h${level}`
  return <div className={`section-heading section-heading--${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <Heading>{title}</Heading>
    {text && <p>{text}</p>}
  </div>
}
