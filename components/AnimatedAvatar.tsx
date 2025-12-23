"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

type Props = { src?: string; size?: number; alt?: string; outline?: boolean }

export default function AnimatedAvatar({ src = '/osama-img.jpeg', size = 160, alt = 'avatar', outline = true }: Props) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    controls.start({
      y: [0, -10, 0, 8, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    })

    const nudge = () =>
      controls.start({
        scale: [1, 1.12, 0.98, 1],
        rotate: [0, -6, 6, 0],
        transition: { duration: 1.1, ease: 'easeOut' }
      })

    const id = setInterval(nudge, 6000 + Math.random() * 4000)
    return () => clearInterval(id)
  }, [controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      whileHover={{ scale: 1.06, rotate: -2 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height
        setPos({ x: dx * 10, y: dy * 8 })
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        width: size,
        height: size,
        borderRadius: 9999,
        overflow: 'hidden',
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        boxShadow: '0 12px 30px rgba(2,6,23,0.35)'
      }}
      className="bg-gradient-to-br from-indigo-500 to-pink-500 p-1 relative"
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '9999px' }}
        />

        {/* Animated circular outline (optional) */}
        {outline && (
          <svg
            className="avatar-outline"
            viewBox={`0 0 ${size + 12} ${size + 12}`}
            width={size + 12}
            height={size + 12}
            style={{ position: 'absolute', left: -6, top: -6, pointerEvents: 'none' }}
          >
            <defs>
              <linearGradient id="grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <circle
              cx={(size + 12) / 2}
              cy={(size + 12) / 2}
              r={(size + 12) / 2 - 4}
              fill="none"
              stroke="url(#grad-a)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * 2 * ((size + 12) / 2 - 4)}`}
              strokeDashoffset="0"
            />
          </svg>
        )}
      </div>
    </motion.div>
  )
}
