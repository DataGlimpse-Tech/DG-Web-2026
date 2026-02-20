import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const PHRASES = [
  'Start Small. Scale Smart.',
  'AI-Integrated Data Products.',
  'Research That Drives Real Impact.',
  'Where Data Meets Intelligence.',
]

function initParticles(w, h, count) {
  return Array.from({ length: count }, () => ({
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r:  Math.random() * 1.5 + 1,
  }))
}

export default function Hero() {
  const canvasRef   = useRef(null)
  const particles   = useRef([])
  const mouse       = useRef({ x: -999, y: -999 })
  const rafId       = useRef(null)

  // Typewriter
  const [displayed,    setDisplayed]    = useState('')
  const [phraseIndex,  setPhraseIndex]  = useState(0)
  const [isDeleting,   setIsDeleting]   = useState(false)
  const [scrolled,     setScrolled]     = useState(false)

  // Canvas neural network
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const count = window.innerWidth < 600 ? 40 : window.innerWidth < 1024 ? 60 : 90
      particles.current = initParticles(canvas.width, canvas.height, count)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) mouse.current = { x: t.clientX, y: t.clientY }
    }
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    const DIST_THRESHOLD = 130
    const MOUSE_RADIUS   = 160

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const pts = particles.current
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]

        // Mouse attraction
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          p.vx += dx * 0.000035
          p.vy += dy * 0.000035
        }

        // Move + speed cap
        p.vx = Math.max(-0.6, Math.min(0.6, p.vx))
        p.vy = Math.max(-0.6, Math.min(0.6, p.vy))
        p.x += p.vx
        p.y += p.vy

        // Bounce edges
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))

        // Draw connections
        for (let j = i + 1; j < pts.length; j++) {
          const q  = pts[j]
          const ex = p.x - q.x
          const ey = p.y - q.y
          const d  = Math.sqrt(ex * ex + ey * ey)
          if (d < DIST_THRESHOLD) {
            const alpha = (1 - d / DIST_THRESHOLD) * 0.3
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }

        // Draw particle
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        grad.addColorStop(0, `rgba(0, 85, 221, 0.8)`)
        grad.addColorStop(1, `rgba(0, 102, 255, 0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      rafId.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // Typewriter logic
  useEffect(() => {
    const current  = PHRASES[phraseIndex]
    const speed    = isDeleting ? 40 : 70
    const pause    = isDeleting ? 0  : 1600

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1))
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % PHRASES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, phraseIndex])

  // Scroll indicator fade
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Radial glow behind content */}
      <div className="hero__glow" />

      <motion.div
        className="hero__content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <motion.span
          className="section-eyebrow"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          R&amp;D · AI · Data Science · MVP Development
        </motion.span>

        <motion.h1
          className="hero__headline"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        >
          Start Small. Scale Smart.<br />
          <span className="gradient-text">Build with DataGlimpse.</span>
        </motion.h1>

        <motion.p
          className="hero__typewriter"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } } }}
        >
          {displayed}
          <span className="hero__cursor" />
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
        >
          <Link to="projects" smooth duration={800} offset={-70} className="btn-primary">
            See Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link to="contact" smooth duration={800} offset={-70} className="btn-ghost">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero__canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: radial-gradient(
            ellipse 60% 50% at 50% 50%,
            rgba(0, 102, 255, 0.07) 0%,
            rgba(0, 102, 255, 0.02) 50%,
            transparent 80%
          );
          pointer-events: none;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: clamp(680px, 78vw, 960px);
          padding: 0 24px;
        }

        .hero__headline {
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 20px 0 24px;
          letter-spacing: -0.02em;
        }

        .hero__typewriter {
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          color: var(--text-secondary);
          min-height: 2.2em;
          margin-bottom: 48px;
          font-weight: 400;
        }

        .hero__cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--accent-cyan);
          margin-left: 3px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .hero__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero__scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: bounce-down 2s ease-in-out infinite;
          z-index: 2;
        }

        .hero__scroll-text { color: var(--text-muted); }

        @media (max-width: 768px) {
          .hero__headline { letter-spacing: -0.01em; font-size: clamp(2.2rem, 7vw, 3.2rem); }
          .hero__typewriter { min-height: 3em; font-size: clamp(0.9rem, 3.5vw, 1.1rem); }
          .hero__actions { gap: 12px; }
          .hero__content { padding: 0 16px; }
        }

        @media (max-width: 480px) {
          .hero__headline { font-size: clamp(1.8rem, 8vw, 2.4rem); }
          .hero__actions { flex-direction: column; align-items: stretch; width: 100%; max-width: 280px; margin: 0 auto; }
          .hero__actions a, .hero__actions button { justify-content: center; }
          .hero__scroll-indicator { display: none; }
          .hero__typewriter { margin-bottom: 32px; }
        }
      `}</style>
    </section>
  )
}
