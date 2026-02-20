import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const PILLARS = [
  { icon: '◉', label: 'AI-Integrated Data Products', desc: 'End-to-end intelligent data solutions'  },
  { icon: '◈', label: 'Applied Research',             desc: 'Research that powers real-world products' },
  { icon: '◆', label: 'Talent Development',           desc: 'Growing the next wave of innovators'    },
]

const fadeLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } }
const fadeRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } }
const fadeUp    = { hidden: { opacity: 0, y:  30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

export default function About() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(v => !v)
    }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">

          {/* Left: text */}
          <motion.div
            className="about__text"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="about__eyebrow-row" variants={fadeUp}>
              <span className="section-eyebrow">Who We Are</span>
              <span className="about__msme-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                MSME Certified
              </span>
              <span className="about__remote-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Fully Remote
              </span>
            </motion.div>
            <motion.h2 className="section-headline" variants={fadeLeft}>
              Research-Driven,<br />
              <span className="gradient-text">Impact-Focused</span>
            </motion.h2>

            <motion.p className="about__body" variants={fadeLeft}>
              DataGlimpse is an R&D technology company that builds AI-integrated data products.
              We work at the intersection of applied research and real-world product delivery,
              combining rigorous data science with production-grade engineering to turn raw data
              into intelligent, actionable systems.
            </motion.p>

            <motion.p className="about__body" variants={fadeLeft}>
              Our team conducts hands-on research, develops ML pipelines, and ships
              end-to-end AI data products across industries. Every product we build is
              grounded in research, validated with real data, and engineered to scale
              from MVP to production.
            </motion.p>

            {/* Pillars */}
            <motion.div className="about__pillars" variants={stagger}>
              {PILLARS.map((p) => (
                <motion.div key={p.label} className="about__pillar" variants={fadeUp}>
                  <span className="about__pillar-icon">{p.icon}</span>
                  <div>
                    <div className="about__pillar-label">{p.label}</div>
                    <div className="about__pillar-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: video */}
          <motion.div
            className="about__visual"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about__video-wrapper">
              <video
                ref={videoRef}
                className="about__video"
                src="/videos/about.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="about__video-glow" />
              <button className="about__mute-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about { background: var(--bg-primary); }

        .about__eyebrow-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .about__eyebrow-row .section-eyebrow {
          margin-bottom: 0;
        }

        .about__msme-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #16a34a;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.22);
          border-radius: 100px;
          padding: 4px 12px;
        }

        .about__remote-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0066FF;
          background: rgba(0, 102, 255, 0.08);
          border: 1px solid rgba(0, 102, 255, 0.22);
          border-radius: 100px;
          padding: 4px 12px;
        }

        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px, 4.5vw, 72px);
          align-items: center;
        }

        .about__body {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 1.02rem;
        }

        .about__pillars {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 36px;
        }

        .about__pillar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          transition: var(--transition-base);
        }

        .about__pillar:hover {
          border-color: rgba(0, 102, 255, 0.25);
          box-shadow: 0 4px 20px rgba(0, 102, 255, 0.1);
        }

        .about__pillar-icon {
          font-size: 1.4rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
          filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));
        }

        .about__pillar-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .about__pillar-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* Video */
        .about__visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about__video-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          box-shadow: 0 0 40px rgba(0, 102, 255, 0.1), 0 0 80px rgba(0, 212, 255, 0.05);
        }

        .about__video {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 20px;
        }

        .about__mute-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(8, 15, 34, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 212, 255, 0.25);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-base);
          z-index: 2;
        }

        .about__mute-btn:hover {
          background: rgba(0, 102, 255, 0.5);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .about__video-glow {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(0, 102, 255, 0.04) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .about__grid { grid-template-columns: 1fr; gap: 32px; align-items: start; }
          .about__visual { order: -1; }
          .about__body { font-size: 0.95rem; }
          .about__pillar { padding: 12px 16px; }
          .about__pillar-label { font-size: 0.88rem; }
        }

        @media (max-width: 480px) {
          .about__video-wrapper { border-radius: 14px; }
          .about__body { font-size: 0.9rem; }
          .about__pillars { gap: 10px; margin-top: 24px; }
          .about__pillar-desc { font-size: 0.75rem; }
        }
      `}</style>
    </section>
  )
}
