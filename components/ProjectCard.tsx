"use client"
import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  tech: string[]
  slug: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(2,6,23,0.08)', scale: 1.01 }}
      transition={{ duration: 0.36 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-2 text-slate-100">{project.title}</h3>
      <p className="text-sm text-slate-300 mb-3">{project.description}</p>
      <p className="muted text-xs">{project.tech.join(' · ')}</p>
    </motion.article>
  )
}
