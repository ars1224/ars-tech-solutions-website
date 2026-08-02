import { values } from '../data/siteData'
export default function ValueStrip() { return <section className="value-strip" aria-label="Service benefits"><div className="container value-grid">{values.map(({title,text,icon:Icon}) => <div className="value" key={title}><span><Icon /></span><div><h2>{title}</h2><p>{text}</p></div></div>)}</div></section> }
