import AnimatedContainer from '../../components/AnimatedContainer'

export default function About() {
  return (
    <AnimatedContainer className="page-section">
      <h1 className="page-title">About Me</h1>
      <p className="text-slate-300">
        I'm an Angular developer with ~4 years of experience building SPAs, progressive web apps, and component libraries. I focus on strong architecture, maintainable code, and developer experience.
      </p>
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-slate-100">Skills</h2>
        <ul className="list-disc pl-5 text-slate-300 space-y-1">
          <li>Angular, RxJS, NgRx</li>
          <li>TypeScript, HTML, SCSS</li>
          <li>Unit & integration testing</li>
          <li>CI/CD and cloud deployments</li>
        </ul>
      </div>
    </AnimatedContainer>
  )
}
