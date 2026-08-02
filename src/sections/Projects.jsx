import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../data/siteData'
export default function Projects() { return <section className="section" id="work"><div className="container"><SectionHeading eyebrow="Our work" title="Selected work and development projects" text="An honest look at practical projects created to build capability, solve problems and demonstrate our approach." /><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><ProjectVisual project={project}/><div className="project-card__body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(x => <span key={x}>{x}</span>)}</div><a href="#contact">View Project <ArrowRight /></a></div></article>)}</div></div></section> }
