import { motion } from 'framer-motion'

const RESEARCH_AREAS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
      </svg>
    ),
    title: 'Artificial Intelligence & ML',
    description: 'We design and deploy end-to-end ML systems, from model selection and training to production-grade MLOps pipelines, built to perform reliably at scale.',
    tags: ['Deep Learning', 'MLOps', 'Model Deployment'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    title: 'Data Science & Analytics',
    description: 'From raw data to decision-ready intelligence. We build predictive models, engineer high-throughput data pipelines, and deliver analytics that drive measurable outcomes.',
    tags: ['Predictive Models', 'Data Pipelines', 'Visualization'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI-Integrated Data Products',
    description: 'We design and build production-ready AI data products from concept to deployment, combining intelligent data pipelines, research-backed models, and scalable architecture to turn raw data into real business value.',
    tags: ['Data Products', 'End-to-End AI', 'MVP Development'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Computer Vision',
    description: 'Real-time visual intelligence systems covering object detection, image segmentation, and facial recognition, built for production environments and edge deployment.',
    tags: ['YOLO', 'OpenCV', 'Segmentation'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Natural Language Processing',
    description: 'Transformer-based architectures, multilingual models, and NLP pipelines for sentiment analysis, named entity recognition, and document intelligence at enterprise scale.',
    tags: ['Transformers', 'Multilingual AI', 'NER'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Generative AI & LLMs',
    description: 'Fine-tuning foundation models, designing RAG pipelines backed by vector databases, and building production-ready agentic AI systems for data-intensive products.',
    tags: ['LLMs', 'RAG / Vector DBs', 'Agentic AI'],
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <div className="section-center" style={{ marginBottom: '0' }}>
          <span className="section-eyebrow">What We Explore</span>
          <h2 className="section-headline">Research Domains</h2>
          <div className="section-divider" />
          <p className="section-subtext">
            The core domains where DataGlimpse applies rigorous research
            and translates discovery into production-ready intelligence.
          </p>
        </div>

        <motion.div
          className="research__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {RESEARCH_AREAS.map((area) => (
            <motion.div
              key={area.title}
              className="glass-card research__card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="research__icon">{area.icon}</div>
              <h3 className="research__title">{area.title}</h3>
              <p className="research__desc">{area.description}</p>
              <div className="research__tags">
                {area.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .research { background: var(--bg-primary); }

        .research__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .research__card {
          padding: 32px 28px;
          cursor: default;
        }

        .research__icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(0, 102, 255, 0.07);
          border: 1px solid rgba(0, 102, 255, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: var(--accent-blue);
          flex-shrink: 0;
          transition: var(--transition-base);
        }

        .research__card:hover .research__icon {
          background: rgba(0, 102, 255, 0.12);
          border-color: rgba(0, 102, 255, 0.28);
          box-shadow: 0 4px 16px rgba(0, 102, 255, 0.14);
        }

        .research__title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .research__desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .research__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (max-width: 900px) {
          .research__grid { grid-template-columns: repeat(2, 1fr); }
          .research__card { padding: 26px 22px; }
        }

        @media (max-width: 580px) {
          .research__grid { grid-template-columns: 1fr; gap: 14px; }
          .research__card { padding: 22px 18px; }
          .research__title { font-size: 0.98rem; }
          .research__desc { font-size: 0.84rem; }
        }
      `}</style>
    </section>
  )
}
