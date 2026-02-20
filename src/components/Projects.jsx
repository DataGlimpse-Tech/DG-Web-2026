import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const PROJECT = {
  title: 'Synthetic Data Generator',
  category: 'Data Science / AI',
  status: 'Beta Version',
  description:
    'An AI-powered engine that generates statistically faithful synthetic tabular data, preserving real-world distributions and feature correlations without exposing sensitive information. Built for ML training, testing, and privacy-compliant research pipelines.',
  tags: ['Python', 'Machine Learning', 'Privacy AI', 'Data Science'],
}

export default function Projects() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(v => !v)
    }
  }

  const sc = { bg: 'rgba(0, 200, 110, 0.08)', border: 'rgba(0, 200, 110, 0.25)', text: '#00a85a' }

  return (
    <section id="projects" className="section projects">
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-headline">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subtext">
            From applied research to production systems, these are the
            AI-integrated products DataGlimpse is actively building.
          </p>
        </motion.div>

        {/* Card: info top, video bottom */}
        <motion.div
          className="projects__card glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
        >
          {/* Top: info */}
          <motion.div
            className="projects__info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="projects__meta-row">
              <span className="projects__category">{PROJECT.category}</span>
              <span
                className="projects__status"
                style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
              >
                <span className="projects__status-dot" style={{ background: sc.text }} />
                {PROJECT.status}
              </span>
            </div>

            <div className="projects__content-row">
              <div className="projects__text">
                <h3 className="projects__title">{PROJECT.title}</h3>
                <p className="projects__desc">{PROJECT.description}</p>
              </div>
              <div className="projects__tags">
                {PROJECT.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="projects__divider" />

          {/* Bottom: full-width video */}
          <motion.div
            className="projects__video-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <video
              ref={videoRef}
              className="projects__video"
              src="/videos/synthetic-data.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Scan-line overlay */}
            <div className="projects__scan" aria-hidden="true" />

            <button
              className="projects__mute-btn"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
            >
              {muted ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
            </button>

            <div className="projects__demo-label">
              <span className="projects__live-dot" />
              Demo
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .projects { background: var(--bg-secondary); }

        /* ── Card ── */
        .projects__card {
          overflow: hidden;
          padding: 0;
          transition: box-shadow var(--transition-base);
        }

        .projects__card:hover {
          box-shadow: 0 20px 60px rgba(0, 102, 255, 0.12), 0 0 0 1px rgba(0, 212, 255, 0.18);
        }

        /* ── Info panel ── */
        .projects__info {
          padding: 36px 40px 28px;
        }

        .projects__meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .projects__category {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-cyan);
        }

        .projects__status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: 0.04em;
        }

        .projects__status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.7); }
        }

        .projects__content-row {
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .projects__text {
          flex: 1;
        }

        .projects__title {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0 0 12px;
          line-height: 1.25;
        }

        .projects__desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0;
          max-width: 580px;
        }

        .projects__tags {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-shrink: 0;
          padding-top: 4px;
        }

        /* Divider */
        .projects__divider {
          height: 1px;
          background: var(--glass-border);
          margin: 0 40px;
        }

        /* ── Video ── */
        .projects__video-wrap {
          position: relative;
          overflow: hidden;
          background: var(--bg-tertiary);
        }

        .projects__video {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Scan-line */
        .projects__scan {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0, 212, 255, 0.015) 3px,
            rgba(0, 212, 255, 0.015) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        .projects__mute-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
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
          z-index: 3;
        }

        .projects__mute-btn:hover {
          background: rgba(0, 102, 255, 0.5);
          border-color: rgba(0, 212, 255, 0.4);
        }

        .projects__demo-label {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 5px 14px;
          background: var(--accent-gradient);
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(0, 102, 255, 0.35);
        }

        .projects__live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: pulse-dot 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .projects__info { padding: 28px 24px 22px; }
          .projects__divider { margin: 0 24px; }
          .projects__content-row { flex-direction: column; gap: 20px; }
          .projects__tags { flex-direction: row; flex-wrap: wrap; }
          .projects__title { font-size: 1.4rem; }
        }

        @media (max-width: 480px) {
          .projects__info { padding: 22px 18px 18px; }
          .projects__divider { margin: 0 18px; }
          .projects__title { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  )
}
