import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const STATS = [
  { value: 40,  suffix: '+', label: 'Projects Delivered',  desc: 'Across AI, Data Science & Product Development' },
  { value: 25,  suffix: '+', label: 'Workshops Conducted', desc: 'Hands-on, industry-aligned training'    },
  { value: 8,   suffix: '',  label: 'Research Domains',    desc: 'Specialized areas of applied innovation' },
  { value: 500, suffix: '+', label: 'Minds Engaged',       desc: 'Students, researchers & professionals'  },
]

function StatItem({ value, suffix, label, desc, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="stat-number">
        {inView ? <CountUp end={value} duration={2.2} separator="," /> : '0'}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 0.12} />
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          background: var(--bg-secondary);
          padding: 80px 0;
          border-top:    1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }

        .stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 100% at 50% 50%,
            rgba(0, 102, 255, 0.04) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          z-index: 1;
        }

        .stat-item {
          padding: 40px 32px;
          text-align: center;
          border-right: 1px solid var(--glass-border);
          position: relative;
        }

        .stat-item:last-child { border-right: none; }

        .stat-number {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 12px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 16px rgba(0, 212, 255, 0.4));
        }

        .stat-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-right: 1px solid var(--glass-border); border-top: 1px solid var(--glass-border); }
          .stat-item:nth-child(4) { border-right: none; border-top: 1px solid var(--glass-border); }
          .stat-item { padding: 28px 20px; }
          .stat-label { font-size: 0.88rem; }
        }

        @media (max-width: 768px) {
          .stat-item { padding: 24px 16px; }
        }

        @media (max-width: 480px) {
          .stats__grid { grid-template-columns: 1fr; }
          .stat-item { border-right: none !important; border-top: 1px solid var(--glass-border); }
          .stat-item:first-child { border-top: none; }
        }
      `}</style>
    </section>
  )
}
