import projects from '../lib/projects'
import ProjectCard from '../components/ProjectCard'
import AnimatedContainer from '../components/AnimatedContainer'
import ContactForm from './contact/ContactForm'

export default function Home() {
  return (
    <>
      <AnimatedContainer className="page-section">
        <div className="space-y-2">
          <h1 className="page-title">Hi — I'm Osama Asharaf</h1>
          <p className="text-slate-300">I’m an Angular developer with ~4 years of experience building SPAs, component libraries, and enterprise features.</p>
          <p><a href="/resume.txt" className="text-primary hover:underline">Download my resume</a></p>
        </div>
      </AnimatedContainer>

      <AnimatedContainer className="page-section">
        <h2 className="page-title">Selected Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </AnimatedContainer>

      <AnimatedContainer className="page-section">
        <h2 className="page-title">Projects (Highlights)</h2>
        <div className="space-y-6 text-slate-300">
          <div>
            <h4 className="text-lg font-semibold text-slate-100">E4Score — Real-Time IoT Shipment & Fleet Monitoring System</h4>
            <ul className="list-disc pl-5 mt-2">
              <li>Engineered a highly available backend to ingest and process real-time IoT data from trucking devices over UDP.</li>
              <li>Developed Azure Function Apps to decode, filter, and persist telemetry events received every second.</li>
              <li>Built dashboards in Angular for administrators to monitor shipment health, location, and alerts.</li>
              <li>Ensured efficient storage and retrieval of event data for millions of signals per day; delivered live updates using SignalR.</li>
              <li>Applied Clean Architecture and Domain-Driven Design (DDD) for scalability and flexibility.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-100">SynapticFlow — Business Strategy & Goal Tracking Platform</h4>
            <ul className="list-disc pl-5 mt-2">
              <li>Built backend logic in .NET Core, Node.js, and Django for managing strategic goals and improvement priorities.</li>
              <li>Designed React.js front-end for interactive dashboards and strategic planning tools.</li>
              <li>Integrated strategic methodologies like X-Matrix, A3 Reports, and Bowler Charts.</li>
              <li>Implemented RBAC, CQRS, and SignalR for real-time collaborative sessions.</li>
            </ul>
          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer className="page-section">
        <h2 className="page-title">About & Experience</h2>
        <p className="text-slate-300 max-w-3xl">Osamah Ashraf — Software Engineer. Experienced in full-stack development with strong backend and frontend skills, cloud serverless workflows, and CI/CD.</p>

        <div className="mt-6 grid gap-6">
          <section>
            <h3 className="text-xl font-semibold text-slate-100">Experience</h3>
            <div className="mt-3 space-y-3 text-slate-300">
              <div>
                <strong>Cybersoft North America Inc — Software Engineer</strong>
                <ul className="list-disc pl-5 mt-2">
                  <li>Designed and maintained robust .NET APIs and enterprise-grade applications.</li>
                  <li>Developed and optimized Angular front-end components integrated with .NET APIs.</li>
                  <li>Built scalable, serverless workflows using Azure Functions.</li>
                  <li>Worked with Azure DevOps for CI/CD pipelines and deployment workflows.</li>
                  <li>Followed Agile Scrum with story-point estimation, sprint planning, and retrospectives.</li>
                  <li>Collaborated in cross-functional teams delivering full-stack solutions with Angular + .NET.</li>
                </ul>
              </div>

              <div>
                <strong>RootPointers — Junior Software Engineer</strong>
                <ul className="list-disc pl-5 mt-2">
                  <li>Built a Social Media app backend using RabbitMQ for scalable message queuing.</li>
                  <li>Developed APIs and microservices using Node.js and Django (Python).</li>
                  <li>Worked on React.js front-end components connected to Node/Django backends.</li>
                  <li>Developed Shopify-integrated apps using GraphQL APIs.</li>
                  <li>Created a task management system with Hangfire for job scheduling.</li>
                  <li>Responsible for database optimization, debugging, and backend architecture.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-slate-100">Education</h3>
            <p className="text-slate-300 mt-2">FAST NUCES — BS Computer Science</p>
          </section>
        </div>
      </AnimatedContainer>

      <AnimatedContainer className="page-section">
        <h2 className="page-title">Contact</h2>
        <p className="text-slate-300 max-w-2xl">Reach me at <a href="mailto:osamahashrafcwork@gmail.com" className="text-primary hover:underline">osamahashrafcwork@gmail.com</a> or <a href="tel:+923054628733" className="text-primary hover:underline">+92 305 462 8733</a>. You can also find me on <a href="https://github.com/Osamah3" className="text-primary hover:underline" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://linkedin.com/in/Osamah-ashraf" className="text-primary hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
        <div className="mt-6 w-full">
          <ContactForm />
        </div>
      </AnimatedContainer>
    </>
  )
}
