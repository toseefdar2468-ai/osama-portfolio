"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setStatus('Message sent — thank you!')
        setTimeout(() => setStatus(''), 4000)
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus('Failed to send message.')
      }
    } catch (err) {
      setStatus('Error sending message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-medium mb-1">Name</div>
        <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-md border border-slate-700 bg-slate-800 text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60" />
      </label>
      <label className="block">
        <div className="text-sm font-medium mb-1">Email</div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-md border border-slate-700 bg-slate-800 text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60" />
      </label>
      <label className="block">
        <div className="text-sm font-medium mb-1">Message</div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full rounded-md border border-slate-700 bg-slate-800 text-slate-100 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
      </label>
      <div className="flex items-center gap-4">
        <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white hover:brightness-95 transition">Send</button>
        <div className="muted text-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: status ? 1 : 0, scale: status ? 1 : 0.98 }}
            transition={{ duration: 0.28 }}
          >
            {status}
          </motion.div>
        </div>
      </div>
    </form>
  )
}
