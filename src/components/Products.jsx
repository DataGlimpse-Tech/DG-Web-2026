import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Ideation & Discovery',
    desc: 'We deep-dive into your problem space, mapping pain points, data availability, and defining a crisp MVP scope.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Research & Architecture',
    desc: 'Our R&D team selects the right models, data pipelines, and tech stack tailored to your use case.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Rapid Prototyping',
    desc: 'We build fast, iterating on functional prototypes with real data, visible demos, and quick feedback loops.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ship & Scale',
    desc: 'Production-ready deployment with monitoring, MLOps pipelines, and ongoing optimization built-in from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/>
      </svg>
    ),
  },
]

const MVP_TYPES = [
  {
    label: 'Synthetic Data',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    label: 'Healthcare AI',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    label: 'LLM & RAG Systems',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Predictive Analytics',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    label: 'Computer Vision',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: 'AI-Powered MVPs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function Products() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(v => !v)
    }
  }

  return (
    <section id="products" className="section mvp">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">MVP Development</span>
          <h2 className="section-headline">
            We Build MVPs That<br />
            <span className="gradient-text">Actually Work</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtext">
            From a raw idea to a live, AI-powered product. DataGlimpse takes your concept
            through research, prototyping, and production deployment. Fast.
          </p>
        </motion.div>

        {/* ── Process Steps ── */}
        <div className="mvp__process">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="glass-card mvp__step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="mvp__step-top">
                <span className="mvp__step-num">{step.number}</span>
                <div className="mvp__step-icon">{step.icon}</div>
              </div>
              <h3 className="mvp__step-title">{step.title}</h3>
              <p className="mvp__step-desc">{step.desc}</p>
              {/* Connector line (not on last) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="mvp__connector" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── MVP Types + Video ── */}
        <div className="mvp__bottom">

          {/* Left: what we build */}
          <motion.div
            className="mvp__types-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mvp__types-heading">What We Build</h3>
            <p className="mvp__types-sub">
              From research to deployment, DataGlimpse builds AI-integrated data products
              across the domains that matter: tailored, production-ready, and built to scale.
            </p>
            <div className="mvp__types-grid">
              {MVP_TYPES.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="mvp__type-chip glass-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                >
                  <div className="mvp__type-icon">{t.icon}</div>
                  <span className="mvp__type-label">{t.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mvp__cta-row">
              <a href="mailto:info@dataglimpse.co.in" className="btn-primary">
                Start Your MVP
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: video */}
          <motion.div
            className="mvp__video-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mvp__video-card glass-card">
              <div className="mvp__video-wrap">
                <video
                  ref={videoRef}
                  className="mvp__video"
                  src="/videos/dataglimpse.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <button
                  className="mvp__mute-btn"
                  onClick={toggleMute}
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                >
                  {muted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                  )}
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>


      <style>{`
        .mvp {
          background: var(--bg-secondary);
          overflow: hidden;
        }

        /* ── Process ── */
        .mvp__process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 80px;
        }

        .mvp__step {
          padding: 28px 24px;
          position: relative;
          cursor: default;
        }

        .mvp__step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .mvp__step-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 6px rgba(0, 212, 255, 0.4));
        }

        .mvp__step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          opacity: 0.75;
        }

        .mvp__step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .mvp__step-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Connector: hidden, step numbers convey flow */
        .mvp__connector { display: none; }

        /* ── Bottom grid ── */
        .mvp__bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 56px);
          align-items: center;
        }

        .mvp__types-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .mvp__types-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .mvp__types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 36px;
        }

        .mvp__type-chip {
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          cursor: default;
        }

        .mvp__type-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          opacity: 0.85;
        }

        .mvp__type-label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }

        .mvp__cta-row {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        /* ── Video ── */
        .mvp__video-card {
          overflow: hidden;
          padding: 0;
        }

        .mvp__video-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          background: var(--bg-tertiary);
          overflow: hidden;
        }

        .mvp__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .mvp__mute-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(5, 11, 24, 0.72);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-base), border-color var(--transition-base);
          z-index: 2;
        }

        .mvp__mute-btn:hover {
          background: rgba(0, 102, 255, 0.5);
          border-color: rgba(0, 212, 255, 0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .mvp__process { grid-template-columns: repeat(2, 1fr); }
          .mvp__bottom { gap: 48px; }
        }

        @media (max-width: 768px) {
          .mvp__bottom { grid-template-columns: 1fr; gap: 36px; }
          .mvp__process { grid-template-columns: repeat(2, 1fr); }
          .mvp__types-grid { grid-template-columns: repeat(2, 1fr); }
          .mvp__types-heading { font-size: 1.35rem; }
          .mvp__step-title { font-size: 0.88rem; }
          .mvp__step-desc { font-size: 0.78rem; }
        }

        @media (max-width: 480px) {
          .mvp__process { grid-template-columns: 1fr; margin-bottom: 40px; }
          .mvp__step { padding: 18px 16px; }
          .mvp__types-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .mvp__types-heading { font-size: 1.2rem; }
          .mvp__types-sub { font-size: 0.85rem; }
          .mvp__type-chip { padding: 12px 10px; }
          .mvp__type-label { font-size: 0.72rem; }
          .mvp__cta-row { flex-direction: column; align-items: stretch; }
          .mvp__cta-row .btn-primary { justify-content: center; }
        }
      `}</style>
    </section>
  )
}
