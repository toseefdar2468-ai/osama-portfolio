"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="site-header sticky top-0 z-20 backdrop-blur-sm bg-slate-900/80 border-b border-slate-800/30 shadow-sm"
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container header-inner">
        <h3 className="brand text-xl font-semibold tracking-tight">Osamah Ashraf</h3>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          <motion.a
            href="/resume.txt"
            className="ml-3 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-slate-100 hover:bg-slate-800/60 transition"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-slate-900/95 border-t border-slate-800/30"
      >
        <div className="px-4 pb-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-primary" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 hover:text-primary" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" className="block py-2 hover:text-primary" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" className="block py-2 hover:text-primary" onClick={() => setOpen(false)}>Contact</Link>
          <a href="/resume.txt" className="inline-block px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100" onClick={() => setOpen(false)}>Resume</a>
        </div>
      </motion.div>
    </motion.header>
  )
}
