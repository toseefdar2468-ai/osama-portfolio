"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

type Project = {
  title: string
  description: string
  tech: string[]
  slug: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.article
        className="card hover:shadow-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(2,6,23,0.12)', scale: 1.02 }}
        transition={{ duration: 0.36 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-slate-100">{project.title}</h3>
            <p className="text-sm text-slate-300 mb-3">{project.description}</p>
            <p className="muted text-xs">{project.tech.join(' · ')}</p>
          </div>
          <div className="ml-2 flex items-center">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
