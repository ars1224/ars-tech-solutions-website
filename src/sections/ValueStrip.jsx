const signals = ['Canterbury-based', 'New Zealand-focused', 'Direct developer access', 'Mobile-first builds', 'Custom solutions', 'Post-launch support']

export default function ValueStrip() {
  return <section className="trust-strip" aria-label="Why businesses work with ARS Tech Solutions"><div className="container trust-strip__inner"><p>Built for New Zealand business</p><ul>{signals.map(signal => <li key={signal}>{signal}</li>)}</ul></div></section>
}
