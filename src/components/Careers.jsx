import { motion } from 'framer-motion'

const OPEN_ROLES = [
  {
    title: 'AI Engineer Intern',
    type: 'Unpaid Internship',
    mode: 'Remote',
    tags: ['Python', 'Machine Learning', 'AI'],
    desc: 'Work alongside our AI team on real-world machine learning projects. Gain hands-on experience building and evaluating models, processing datasets, and contributing to AI product development.',
  },
  {
    title: 'Research Intern',
    type: 'Unpaid Internship',
    mode: 'Remote',
    tags: ['Research', 'Data Science', 'Documentation'],
    desc: 'Assist in applied research across AI, data science, and emerging technologies. Work on literature reviews, experiments, and research papers under the guidance of our R&D team.',
  },
  {
    title: 'Full Stack Developer Intern',
    type: 'Unpaid Internship',
    mode: 'Remote',
    tags: ['React', 'Node.js', 'APIs'],
    desc: 'Build and maintain web interfaces and backend APIs for our AI-integrated data products. Collaborate with engineers and designers to ship clean, functional software.',
  },
  {
    title: 'Social Media Intern',
    type: 'Unpaid Internship',
    mode: 'Remote',
    tags: ['Content Creation', 'LinkedIn', 'Instagram'],
    desc: 'Create and manage content across our social media platforms. Craft posts, reels, and campaigns that communicate our research, products, and culture to a growing tech audience.',
  },
]

const PERKS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Flexible Work',
    desc: 'Fully remote — work from anywhere that sparks your best thinking.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Research-First Culture',
    desc: 'Work on real research problems with direct impact on AI products.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Grow Fast',
    desc: 'Accelerated learning through workshops, projects, and mentorship.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Real-World Impact',
    desc: 'Ship products and research that reaches industry and academia.',
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Careers() {
  return (
    <section id="careers" className="section careers">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginBottom: '0' }}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>Join the Team</motion.span>
          <motion.h2 className="section-headline" variants={fadeUp}>
            Build the Future of <span className="gradient-text">Intelligent Systems</span>
          </motion.h2>
          <div className="section-divider" />
          <motion.p className="section-subtext" variants={fadeUp}>
            We are a research-driven team that thrives on curiosity, collaboration, and impact.
            If you love solving hard problems with AI and data, you belong here.
          </motion.p>
        </motion.div>

        {/* Perks */}
        <motion.div
          className="careers__perks"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PERKS.map((p) => (
            <motion.div key={p.title} className="careers__perk" variants={cardVariants}>
              <div className="careers__perk-icon">{p.icon}</div>
              <div className="careers__perk-title">{p.title}</div>
              <div className="careers__perk-desc">{p.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Roles */}
        <motion.div
          className="careers__roles-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="careers__roles-title">Open Positions</h3>
          <span className="careers__roles-count">{OPEN_ROLES.length} roles</span>
        </motion.div>

        <motion.div
          className="careers__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {OPEN_ROLES.map((role) => (
            <motion.div
              key={role.title}
              className="glass-card careers__card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className="careers__card-top">
                <div>
                  <h4 className="careers__card-title">{role.title}</h4>
                  <div className="careers__card-meta">
                    <span className="careers__badge careers__badge--type">{role.type}</span>
                    <span className="careers__badge careers__badge--mode">{role.mode}</span>
                  </div>
                </div>
              </div>
              <p className="careers__card-desc">{role.desc}</p>
              <div className="careers__card-tags">
                {role.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href={`mailto:hr@dataglimpse.co.in?subject=Application: ${encodeURIComponent(role.title)}`}
                className="careers__apply-btn"
              >
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="careers__cta-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="careers__cta-text">
            <div className="careers__cta-title">Don't see a role that fits?</div>
            <div className="careers__cta-sub">Send us your profile anyway. We are always looking for exceptional people.</div>
            <div className="careers__cta-location">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Bengaluru, India &nbsp;·&nbsp; All roles are fully remote
            </div>
          </div>
          <a href="mailto:hr@dataglimpse.co.in" className="btn-primary careers__cta-btn">
            hr@dataglimpse.co.in
          </a>
        </motion.div>

      </div>

      <style>{`
        .careers { background: var(--bg-primary); }

        /* Perks */
        .careers__perks {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 56px 0 72px;
        }

        .careers__perk {
          padding: 28px 24px;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          text-align: center;
        }

        .careers__perk-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 102, 255, 0.07);
          border: 1px solid rgba(0, 102, 255, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: var(--accent-blue);
        }

        .careers__perk-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .careers__perk-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Roles header */
        .careers__roles-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .careers__roles-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .careers__roles-count {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 100px;
          padding: 4px 14px;
          letter-spacing: 0.04em;
        }

        /* Grid */
        .careers__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }

        .careers__card {
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          cursor: default;
        }

        .careers__card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .careers__card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .careers__card-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .careers__badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 3px 10px;
        }

        .careers__badge--type {
          color: var(--accent-blue);
          background: rgba(0, 102, 255, 0.1);
          border: 1px solid rgba(0, 102, 255, 0.2);
        }

        .careers__badge--mode {
          color: var(--accent-cyan);
          background: rgba(0, 212, 255, 0.07);
          border: 1px solid rgba(0, 212, 255, 0.18);
        }

        .careers__card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
        }

        .careers__card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .careers__apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--accent-cyan);
          text-decoration: none;
          margin-top: 4px;
          transition: gap var(--transition-base), opacity var(--transition-base);
        }

        .careers__apply-btn:hover {
          gap: 10px;
          opacity: 0.8;
        }

        /* CTA Banner */
        .careers__cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 40px 48px;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          flex-wrap: wrap;
        }

        .careers__cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .careers__cta-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .careers__cta-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .careers__cta-location {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 10px;
        }

        .careers__cta-btn {
          flex-shrink: 0;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .careers__perks { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .careers__grid { grid-template-columns: 1fr; }
          .careers__cta-banner { flex-direction: column; align-items: flex-start; padding: 32px 28px; }
          .careers__card { padding: 22px 20px; }
          .careers__cta-title { font-size: 1.05rem; }
          .careers__perks { margin: 40px 0 52px; }
        }

        @media (max-width: 580px) {
          .careers__perks { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .careers__perk  { padding: 20px 16px; }
          .careers__perk-title { font-size: 0.88rem; }
          .careers__perk-desc { font-size: 0.78rem; }
          .careers__card-title { font-size: 0.92rem; }
          .careers__card-desc { font-size: 0.82rem; }
          .careers__roles-title { font-size: 1.1rem; }
        }

        @media (max-width: 420px) {
          .careers__perks { grid-template-columns: 1fr; }
          .careers__cta-banner { padding: 24px 20px; }
        }
      `}</style>
    </section>
  )
}
