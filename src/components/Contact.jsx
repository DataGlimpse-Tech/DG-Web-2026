import { motion } from 'framer-motion'

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/dataglimpse/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DataGlimpse-Tech',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/dataglimpse?s=21',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@dataglimpse_24?si=M7Wp5DMuD4hiUvmr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--bg-primary)"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      {/* Decorative bg text */}
      <div className="contact__bg-text" aria-hidden="true">CONNECT</div>

      <div className="container">
        <motion.div
          className="contact__inner section-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Let&apos;s Collaborate</span>
          <h2 className="section-headline contact__headline">
            Have a project in mind?
          </h2>
          <p className="section-subtext">
            Whether it is a research collaboration, a custom workshop, or an AI-driven data product,
            we would love to build something meaningful together.
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:info@dataglimpse.co.in"
            className="contact__email-cta"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <span className="contact__email-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            info@dataglimpse.co.in
          </motion.a>

          {/* Or divider */}
          <div className="contact__divider">
            <span>or find us on</span>
          </div>

          {/* Socials */}
          <div className="contact__socials">
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .contact__bg-text {
          position: absolute;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(80px, 15vw, 160px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0, 102, 255, 0.07);
          white-space: nowrap;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          letter-spacing: 0.1em;
        }

        .contact__inner {
          position: relative;
          z-index: 1;
        }

        .contact__headline {
          font-size: clamp(2rem, 4.5vw, 3.5rem);
        }

        .contact__email-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 700;
          color: var(--accent-blue);
          text-decoration: none;
          padding: 20px 40px;
          border: 1px solid rgba(0, 102, 255, 0.25);
          border-radius: 12px;
          background: rgba(0, 102, 255, 0.04);
          transition: var(--transition-base);
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .contact__email-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.06), rgba(0, 136, 255, 0.06));
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .contact__email-cta:hover {
          box-shadow: 0 8px 32px rgba(0, 102, 255, 0.16);
          border-color: var(--accent-blue);
        }

        .contact__email-cta:hover::before { opacity: 1; }

        .contact__email-icon {
          display: flex;
          align-items: center;
          opacity: 0.7;
        }

        .contact__divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          color: var(--text-muted);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          justify-content: center;
        }

        .contact__divider::before,
        .contact__divider::after {
          content: '';
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
        }

        .contact__socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .contact__email-cta {
            padding: 16px 24px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact__email-cta {
            padding: 14px 16px;
            font-size: 0.88rem;
            gap: 8px;
            word-break: break-all;
          }
          .contact__bg-text { display: none; }
        }
      `}</style>
    </section>
  )
}
