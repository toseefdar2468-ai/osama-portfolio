import projects from '../../lib/projects'
import ProjectCard from '../../components/ProjectCard'
import AnimatedContainer from '../../components/AnimatedContainer'

export default function Projects() {
  return (
    <AnimatedContainer className="page-section">
      <h1 className="page-title">Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </AnimatedContainer>
  )
}
