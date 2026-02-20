import { motion } from 'framer-motion'

// Replace with actual team data when ready:
// const TEAM = [
//   { name: 'Your Name', role: 'Co-Founder & CEO', photo: '/images/team/name.jpg', linkedin: 'https://linkedin.com/in/...' },
// ]

const PLACEHOLDER_COUNT = 6

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">The People</span>
          <h2 className="section-headline">Meet the Team</h2>
          <div className="section-divider" />
          <p className="section-subtext">
            Researchers, engineers, and builders passionate about transforming data into intelligence.
          </p>
        </motion.div>

        <motion.div
          className="team__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <motion.div key={i} className="glass-card team__card" variants={cardVariants}>
              <div className="team__avatar-ring">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="team__name">Coming Soon</div>
              <div className="team__role">Team Member</div>
              <div className="team__placeholder-label">Photo &amp; details to be added</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .team { background: var(--bg-secondary); }

        .team__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .team__card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          border-style: dashed;
          border-color: rgba(0, 212, 255, 0.2);
          cursor: default;
          transition: var(--transition-base);
        }

        .team__card:hover {
          border-color: rgba(0, 212, 255, 0.35);
          background: rgba(0, 212, 255, 0.03);
        }

        .team__avatar-ring {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(0, 102, 255, 0.06);
          border: 2px dashed rgba(0, 102, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .team__name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .team__role {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .team__placeholder-label {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .team__grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .team__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
