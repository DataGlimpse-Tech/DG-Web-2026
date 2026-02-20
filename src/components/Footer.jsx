import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const FOOTER_LINKS = {
  Company:   ['About', 'Research', 'Projects', 'Workshops', 'Contact', 'Careers'],
  Solutions: ['MVP Development', 'R&D Services', 'TechFolk Sessions', 'Collaborate'],
  Connect:   ['LinkedIn', 'GitHub', 'Twitter', 'YouTube'],
}

const EXTERNAL_LINKS = {
  LinkedIn: 'https://www.linkedin.com/company/dataglimpse/',
  GitHub:   'https://github.com/DataGlimpse-Tech',
  Twitter:  'https://x.com/dataglimpse?s=21',
  YouTube:  'https://youtube.com/@dataglimpse_24?si=M7Wp5DMuD4hiUvmr',
}

const SCROLL_TARGETS = {
  About:                     'about',
  Research:                  'research',
  Projects:                  'projects',
  Workshops:                 'workshops',
  Contact:                   'contact',
  'MVP Development':   'products',
  'R&D Services':      'research',
  'TechFolk Sessions': 'workshops',
  'Collaborate':       'contact',
  Careers:             'careers',
}

function PrivacyModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="pp-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="pp-modal"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
          <div className="pp-header">
            <h2 className="pp-title">Privacy Policy</h2>
            <button className="pp-close" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="pp-body">
            <p className="pp-updated">Last updated: January 2025</p>

            <p className="pp-intro">
              DataGlimpse (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we handle information when you visit our website
              or contact us. We are an MSME-certified R&amp;D technology company based in Bengaluru, India.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We collect only the information you voluntarily provide to us:
            </p>
            <ul>
              <li><strong>Contact inquiries:</strong> When you email us at info@dataglimpse.co.in or hr@dataglimpse.co.in, we receive your email address and the content of your message.</li>
              <li><strong>Workshop registrations:</strong> When you register interest in a TechFolk session via email, we collect the information you provide in that email.</li>
            </ul>
            <p>
              We do <strong>not</strong> use contact forms, sign-up forms, or collect any information through this website automatically.
            </p>

            <h3>2. Cookies &amp; Tracking</h3>
            <p>
              This website does <strong>not</strong> use cookies, tracking pixels, analytics scripts,
              or any form of behavioural tracking. We do not collect data about your browsing behaviour,
              device, IP address, or location through this website.
            </p>

            <h3>3. How We Use Your Information</h3>
            <p>Information you send us via email is used solely to:</p>
            <ul>
              <li>Respond to your inquiry or collaboration request</li>
              <li>Process internship or job applications</li>
              <li>Send workshop-related updates if you have registered interest</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h3>4. Third-Party Services</h3>
            <p>
              Our website contains links to third-party platforms including LinkedIn, GitHub, Twitter/X, and YouTube.
              When you click these links, you leave our website and are subject to those platforms&apos; own privacy policies.
              We have no control over and accept no responsibility for their content or privacy practices.
            </p>

            <h3>5. Data Retention</h3>
            <p>
              Email communications are retained only as long as necessary to fulfil the purpose for which
              they were sent (e.g., responding to your inquiry). We do not store personal data on external
              servers or databases through this website.
            </p>

            <h3>6. Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information
              you have shared with us via email. To exercise these rights, contact us at:
            </p>
            <p className="pp-email-highlight">info@dataglimpse.co.in</p>

            <h3>7. Children&apos;s Privacy</h3>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect
              personal information from children.
            </p>

            <h3>8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page
              with an updated date. Continued use of our website following any changes constitutes acceptance
              of the updated policy.
            </p>

            <h3>9. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p><strong>DataGlimpse</strong><br />
            Bengaluru, Karnataka, India<br />
            Email: <a href="mailto:info@dataglimpse.co.in">info@dataglimpse.co.in</a></p>
          </div>
        </motion.div>
      </motion.div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="hero" smooth duration={700} style={{ cursor: 'pointer', display: 'inline-block' }}>
                <img src="/images/logo/IMG_8417.JPEG" alt="DataGlimpse" height="36" className="footer__logo-img" />
              </Link>
              <p className="footer__tagline">
                Building AI-Integrated Data Products<br />that turn raw data into real value.
              </p>
              <a href="mailto:info@dataglimpse.co.in" className="footer__email">
                info@dataglimpse.co.in
              </a>
              <div className="footer__location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Bengaluru, India
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className="footer__col">
                <div className="footer__col-title">{group}</div>
                <ul className="footer__col-links">
                  {links.map(link => (
                    <li key={link}>
                      {EXTERNAL_LINKS[link] ? (
                        <a href={EXTERNAL_LINKS[link]} className="footer__link" target="_blank" rel="noopener noreferrer">{link}</a>
                      ) : SCROLL_TARGETS[link] ? (
                        <Link
                          to={SCROLL_TARGETS[link]}
                          smooth
                          duration={700}
                          offset={-70}
                          className="footer__link"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a href="#" className="footer__link">{link}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__bottom">
            <span>© {year} DataGlimpse. All rights reserved.</span>
            <span className="footer__bottom-right">
              <button className="footer__policy-link" onClick={() => setShowPrivacy(true)}>
                Privacy Policy
              </button>
              <span className="footer__made">·&nbsp; Built with passion · R&amp;D · AI · Innovation</span>
            </span>
          </div>
        </div>

        <style>{`
          .footer {
            background: var(--bg-secondary);
            padding: 72px 0 32px;
            position: relative;
          }

          .footer::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 1px;
            background: var(--accent-gradient);
            opacity: 0.35;
          }

          .footer__grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: clamp(28px, 3.5vw, 48px);
            margin-bottom: 56px;
          }

          .footer__tagline {
            color: var(--text-secondary);
            font-size: 0.88rem;
            line-height: 1.7;
            margin: 16px 0 12px;
          }

          .footer__email {
            font-size: 0.85rem;
            color: var(--accent-cyan);
            text-decoration: none;
            transition: opacity 0.2s;
          }

          .footer__email:hover { opacity: 0.7; }

          .footer__location {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-top: 10px;
          }

          .footer__col-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-primary);
            margin-bottom: 20px;
          }

          .footer__col-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .footer__link {
            font-size: 0.87rem;
            color: var(--text-muted);
            cursor: pointer;
            text-decoration: none;
            transition: color var(--transition-base);
          }

          .footer__link:hover { color: var(--accent-cyan); }

          .footer__bottom {
            padding-top: 28px;
            border-top: 1px solid rgba(0, 0, 0, 0.07);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--text-muted);
            flex-wrap: wrap;
            gap: 8px;
          }

          .footer__bottom-right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .footer__policy-link {
            background: none;
            border: none;
            font-size: 0.8rem;
            color: var(--accent-cyan);
            cursor: pointer;
            padding: 0;
            font-family: inherit;
            text-decoration: underline;
            text-underline-offset: 3px;
            transition: opacity 0.2s;
          }

          .footer__policy-link:hover { opacity: 0.7; }

          .footer__made { opacity: 0.6; }

          /* ── Privacy Modal ── */
          .pp-overlay {
            position: fixed;
            inset: 0;
            background: rgba(10, 20, 40, 0.55);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 9000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }

          .pp-modal {
            background: #fff;
            border-radius: 20px;
            border: 1px solid rgba(0, 102, 255, 0.12);
            box-shadow: 0 24px 80px rgba(0, 102, 255, 0.14), 0 4px 16px rgba(0, 0, 0, 0.08);
            width: 100%;
            max-width: 720px;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .pp-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 32px 20px;
            border-bottom: 1px solid rgba(0, 102, 255, 0.08);
            flex-shrink: 0;
            position: sticky;
            top: 0;
            background: #fff;
          }

          .pp-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
          }

          .pp-close {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(0, 102, 255, 0.06);
            border: 1px solid rgba(0, 102, 255, 0.12);
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition-base);
            flex-shrink: 0;
          }

          .pp-close:hover {
            background: rgba(0, 102, 255, 0.12);
            border-color: rgba(0, 102, 255, 0.25);
            color: var(--accent-blue);
          }

          .pp-body {
            padding: 28px 32px 36px;
            overflow-y: auto;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.8;
          }

          .pp-updated {
            font-size: 0.78rem;
            color: var(--text-muted);
            margin-bottom: 20px;
          }

          .pp-intro {
            margin-bottom: 24px;
          }

          .pp-body h3 {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-primary);
            margin: 24px 0 10px;
          }

          .pp-body p {
            margin-bottom: 12px;
          }

          .pp-body ul {
            list-style: disc;
            padding-left: 20px;
            margin-bottom: 12px;
          }

          .pp-body ul li {
            margin-bottom: 6px;
          }

          .pp-body a {
            color: var(--accent-cyan);
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          .pp-email-highlight {
            display: inline-block;
            padding: 6px 16px;
            background: rgba(0, 102, 255, 0.05);
            border: 1px solid rgba(0, 102, 255, 0.15);
            border-radius: 8px;
            color: var(--accent-blue);
            font-weight: 600;
            font-size: 0.9rem;
            margin: 8px 0 12px;
          }

          @media (max-width: 900px) {
            .footer__grid { grid-template-columns: 1fr 1fr; gap: 36px; }
            .footer__brand { grid-column: span 2; }
          }

          @media (max-width: 600px) {
            .footer__tagline { font-size: 0.84rem; }
            .footer__col-title { font-size: 0.7rem; }
            .footer__link { font-size: 0.82rem; }
            .footer__email { font-size: 0.8rem; }
          }

          @media (max-width: 480px) {
            .footer__grid { grid-template-columns: 1fr; gap: 24px; }
            .footer__brand { grid-column: span 1; }
            .footer__bottom { flex-direction: column; text-align: center; font-size: 0.75rem; }
            .footer__bottom-right { justify-content: center; }
            .footer { padding: 48px 0 24px; }
            .pp-modal { max-height: 90vh; border-radius: 16px; }
            .pp-header { padding: 20px 20px 16px; }
            .pp-body { padding: 20px 20px 28px; }
          }
        `}</style>
      </footer>

      <AnimatePresence>
        {showPrivacy && <PrivacyModal key="privacy-modal" onClose={() => setShowPrivacy(false)} />}
      </AnimatePresence>
    </>
  )
}
