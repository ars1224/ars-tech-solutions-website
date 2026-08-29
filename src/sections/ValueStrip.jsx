const signals = ['Business websites', 'Website redesigns', 'Custom web applications', 'Website care', 'Direct developer', 'Canterbury-based']

export default function ValueStrip() {
  return <section className="trust-strip" aria-label="ARS Tech Solutions services"><div className="container trust-strip__inner"><p>Web services for New Zealand businesses</p><ul>{signals.map(signal => <li key={signal}>{signal}</li>)}</ul></div></section>
}
