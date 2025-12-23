import projects from '../../../../lib/projects'
import AnimatedContainer from '../../../../components/AnimatedContainer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

export default function ProjectDetail({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <AnimatedContainer className="page-section">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="page-title">{project.title}</h1>
          <Link href="/projects" className="text-sm text-primary hover:underline">← Back to projects</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-300">{project.description}</p>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-sm text-slate-300">This page contains an extended writeup for the project. Replace this paragraph with a complete case study, architecture notes, challenges, and outcomes to make it compelling.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Role & Responsibilities</h3>
              <ul className="list-disc pl-5 text-slate-300">
                <li>Primary implementation and architecture</li>
                <li>Code reviews, testing strategy, and CI/CD</li>
                <li>Performance and accessibility improvements</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card">
              <h4 className="font-semibold">Tech stack</h4>
              <p className="muted text-sm mt-2">{project.tech.join(', ')}</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Quick facts</h4>
              <ul className="muted text-sm mt-2 list-disc pl-5">
                <li>Team size: 4–8</li>
                <li>Duration: 6+ months</li>
                <li>My contributions: Frontend + architecture</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </AnimatedContainer>
  )
}
