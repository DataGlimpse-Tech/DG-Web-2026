import { motion } from 'framer-motion'

const WORKSHOPS = [
  {
    edition: 'TechFolk #01',
    title: 'System Scalability and AI Implementation',
    subtitle: 'Expert Session with Roushan Khan, Amazon',
    speaker: {
      name: 'Roushan Khan (He/Him)',
      role: 'System Development Manager III, Amazon',
      avatar: null,
    },
    description:
      'DataGlimpse hosted Roushan Khan, System Development Manager III at Amazon, for a focused session on system scalability, infrastructure design, and real-world AI implementation. Roushan shared first-hand experience building and scaling intelligent systems in production, offering attendees practical perspectives on the decisions and tradeoffs that define enterprise-grade AI.',
    highlights: [
      'System scalability principles and infrastructure design',
      'Real-world AI implementation at Amazon',
      'Live Q&A on production systems and engineering leadership',
    ],
    tags: ['System Design', 'Infrastructure', 'Applied AI', 'Amazon'],
    date: '2025',
    bannerImage: '/images/workshops/workshop-1/session%201.jpeg',
    gallery: [
      '/images/workshops/workshop-1/1752948728154.jpeg',
      '/images/workshops/workshop-1/1752948728429.jpeg',
      '/images/workshops/workshop-1/1752948728884.jpeg',
    ],
  },
  {
    edition: 'TechFolk #02',
    title: 'AI in Banking: LLMs, RAG Applications and Data Analytics',
    subtitle: 'Expert Session with Yasir Khan, Citi',
    speaker: {
      name: 'Yasir Khan',
      role: 'Analytics Manager, Citi | 8+ Years in Data and AI',
      avatar: null,
    },
    description:
      'DataGlimpse hosted Yasir Khan, Analytics Manager at Citi, for a session on AI in financial services. With over 8 years of experience in Data and AI, Yasir covered chatbots, RAG-based systems, large language models, and the foundational role of statistics in making these technologies reliable and production-ready.',
    highlights: [
      'AI and LLM applications in banking and financial services',
      'Design and architecture of RAG-based systems',
      'Statistical foundations for modern AI deployment',
    ],
    tags: ['Banking AI', 'LLMs', 'RAG Applications', 'Statistics'],
    date: '2025',
    bannerImage: '/images/workshops/workshop-2/Session%202.jpeg',
    gallery: [
      '/images/workshops/workshop-2/1757264953202.jpeg',
      '/images/workshops/workshop-2/1757264954566.jpeg',
      '/images/workshops/workshop-2/1757264954843.jpeg',
    ],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function Workshops() {
  return (
    <section id="workshops" className="section workshops">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">TechFolk by DataGlimpse</span>
          <h2 className="section-headline">Industry Expert Sessions</h2>
          <div className="section-divider" />
          <p className="section-subtext">
            We invite seasoned practitioners from the tech industry to share
            real-world experience, tools, and insights. No fluff, just what
            actually works in production.
          </p>
        </motion.div>

        {/* Workshop Cards */}
        <div className="workshops__grid">
          {WORKSHOPS.map((w, i) => (
            <motion.div
              key={i}
              className="glass-card workshops__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Banner Image */}
              <div className="workshops__banner">
                <img
                  src={w.bannerImage}
                  alt={w.title}
                  className="workshops__banner-img"
                  loading="lazy"
                />
                <div className="workshops__banner-overlay" />
                <span className="workshops__edition-badge">{w.edition}</span>
              </div>

              {/* Card Content */}
              <div className="workshops__content">

                {/* Top bar */}
                <div className="workshops__card-top">
                  <span className="workshops__date-badge">{w.date}</span>
                </div>

                {/* Speaker */}
                <div className="workshops__speaker">
                  <div className="workshops__speaker-avatar">
                    {w.speaker.avatar
                      ? <img src={w.speaker.avatar} alt={w.speaker.name} />
                      : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      )
                    }
                  </div>
                  <div className="workshops__speaker-info">
                    <div className="workshops__speaker-name">{w.speaker.name}</div>
                    <div className="workshops__speaker-role">{w.speaker.role}</div>
                  </div>
                  <div className="workshops__speaker-label">Guest Speaker</div>
                </div>

                {/* Content */}
                <h3 className="workshops__title">{w.title}</h3>
                <div className="workshops__subtitle">{w.subtitle}</div>
                <p className="workshops__desc">{w.description}</p>

                {/* Highlights */}
                <ul className="workshops__highlights">
                  {w.highlights.map(h => (
                    <li key={h} className="workshops__highlight-item">
                      <span className="workshops__check">&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="workshops__card-footer">
                  <div className="workshops__tags">
                    {w.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>

              </div>

              {/* Photo Gallery */}
              <div className="workshops__gallery">
                {w.gallery.map((src, idx) => (
                  <div key={idx} className="workshops__gallery-item">
                    <img src={src} alt={`${w.edition} session photo ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Next Session Teaser */}
        <motion.div
          className="workshops__next"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="workshops__next-inner">
            <div className="workshops__next-left">
              <span className="workshops__next-eyebrow">What&apos;s Next</span>
              <h3 className="workshops__next-title">
                TechFolk #03: <span className="gradient-text">Coming Soon</span>
              </h3>
              <p className="workshops__next-desc">
                Our next industry expert session is in the pipeline.
                Drop us a message to suggest a topic or register your interest.
              </p>
            </div>
            <div className="workshops__next-right">
              <a href="mailto:info@dataglimpse.co.in" className="btn-primary">
                Register Interest
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .workshops { background: var(--bg-secondary); }

        /* Cards grid */
        .workshops__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 36px;
        }

        .workshops__card {
          display: flex;
          flex-direction: column;
          cursor: default;
          padding: 0;
          overflow: hidden;
        }

        /* Banner */
        .workshops__banner {
          position: relative;
          aspect-ratio: 16 / 7;
          overflow: hidden;
          background: var(--bg-tertiary);
          flex-shrink: 0;
        }

        .workshops__banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .workshops__card:hover .workshops__banner-img {
          transform: scale(1.04);
        }

        .workshops__banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 35%,
            rgba(10, 20, 40, 0.4) 100%
          );
        }

        .workshops__edition-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: var(--accent-gradient);
          color: white;
          padding: 4px 13px;
          border-radius: 20px;
          box-shadow: 0 2px 12px rgba(0, 102, 255, 0.35);
        }

        .workshops__card-top {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .workshops__date-badge {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-muted);
          padding: 3px 10px;
          border: 1px solid rgba(0, 102, 255, 0.12);
          border-radius: 20px;
          background: rgba(0, 102, 255, 0.04);
        }

        /* Card content */
        .workshops__content {
          padding: 22px 26px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        /* Speaker */
        .workshops__speaker {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0, 102, 255, 0.04);
          border: 1px solid rgba(0, 102, 255, 0.12);
          border-radius: 10px;
        }

        .workshops__speaker-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 102, 255, 0.07);
          border: 1px solid rgba(0, 102, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          flex-shrink: 0;
          overflow: hidden;
        }

        .workshops__speaker-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .workshops__speaker-info { flex: 1; min-width: 0; }

        .workshops__speaker-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .workshops__speaker-role {
          font-size: 0.73rem;
          color: var(--text-muted);
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .workshops__speaker-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          padding: 3px 9px;
          border: 1px solid rgba(0, 102, 255, 0.2);
          border-radius: 20px;
          background: rgba(0, 102, 255, 0.06);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Content */
        .workshops__title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .workshops__subtitle {
          font-size: 0.79rem;
          color: var(--accent-cyan);
          font-weight: 500;
          margin-top: -4px;
        }

        .workshops__desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* Highlights */
        .workshops__highlights {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .workshops__highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .workshops__check {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: rgba(0, 102, 255, 0.08);
          border: 1px solid rgba(0, 102, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.56rem;
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Footer */
        .workshops__card-footer {
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(0, 102, 255, 0.07);
        }

        .workshops__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        /* Photo Gallery */
        .workshops__gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
          gap: 2px;
          border-top: 1px solid rgba(0, 102, 255, 0.07);
          flex-shrink: 0;
        }

        .workshops__gallery-item {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--bg-tertiary);
        }

        .workshops__gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .workshops__gallery-item:hover img {
          transform: scale(1.07);
        }

        /* Next Session */
        .workshops__next {
          background: white;
          border: 1px solid rgba(0, 102, 255, 0.1);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0, 102, 255, 0.06);
        }

        .workshops__next::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent-gradient);
          opacity: 0.7;
        }

        .workshops__next-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 36px 40px;
          flex-wrap: wrap;
        }

        .workshops__next-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          margin-bottom: 10px;
        }

        .workshops__next-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .workshops__next-desc {
          font-size: 0.87rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 480px;
        }

        .workshops__next-right { flex-shrink: 0; }

        /* Responsive */
        @media (max-width: 900px) {
          .workshops__grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .workshops__next-inner { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
          .workshops__speaker-label { display: none; }
          .workshops__content { padding: 18px 20px 16px; }
        }

        @media (max-width: 480px) {
          .workshops__banner { aspect-ratio: 16 / 9; }
          .workshops__speaker-name { font-size: 0.8rem; }
          .workshops__speaker-role { font-size: 0.68rem; }
          .workshops__title { font-size: 0.98rem; }
          .workshops__desc { font-size: 0.8rem; }
          .workshops__highlight-item { font-size: 0.78rem; }
          .workshops__next-title { font-size: 1.15rem; }
          .workshops__next-right { width: 100%; }
          .workshops__next-right .btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
