import { ArrowUpRight } from 'lucide-react'
export default function ProjectVisual({ project }) {
  return <div className={`project-visual project-visual--${project.theme}`} aria-label={`Placeholder preview for ${project.title}`} role="img">
    <div className="project-visual__top"><span /><span /><span /></div>
    <div className="project-visual__body"><div className="project-visual__side"><b /><i /><i /><i /></div><div className="project-visual__main"><span /><b /><div><i /><i /></div></div></div>
    <ArrowUpRight aria-hidden="true" />
  </div>
}
