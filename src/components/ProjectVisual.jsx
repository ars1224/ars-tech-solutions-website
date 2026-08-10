import { ArrowUpRight } from 'lucide-react'
export default function ProjectVisual({ project }) {
  return <div className="project-visual" aria-label={`Screenshot of ${project.title}`} role="img">
    <img src={project.image} alt={`${project.title} interface preview`} width="1887" height="989" loading="lazy" decoding="async" />
    <div className="project-visual__overlay" />
    <ArrowUpRight aria-hidden="true" />
  </div>
}
