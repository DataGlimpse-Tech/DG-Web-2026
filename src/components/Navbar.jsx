import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',     to: 'about'     },
  { label: 'Projects',  to: 'projects'  },
  { label: 'MVP',       to: 'products'  },
  { label: 'Workshops', to: 'workshops' },
  { label: 'Careers',   to: 'careers'   },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo/IMG_8417.JPEG" alt="DataGlimpse" className="navbar__logo-img" />
          <span className="navbar__wordmark">DataGlimpse</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={700}
                offset={-70}
                spy
                activeClass="navbar__link--active"
                className="navbar__link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="contact" smooth duration={700} offset={-70} className="btn-primary navbar__cta">
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={700}
                    offset={-70}
                    className="mobile-menu__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="contact"
              smooth
              duration={700}
              offset={-70}
              className="btn-primary"
              style={{ display: 'inline-block', marginTop: '16px' }}
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(0, 102, 255, 0.15);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.14), 0 1px 4px rgba(0, 0, 0, 0.08);
          transition: var(--transition-base);
        }

        .navbar--scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: rgba(0, 102, 255, 0.18);
          box-shadow: 0 4px 32px rgba(0, 102, 255, 0.14), 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .navbar__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 40px;
          height: 70px;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .navbar__logo {
          flex-shrink: 0;
          cursor: pointer;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .navbar__logo:hover { opacity: 0.85; }

        .navbar__logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          border-radius: 50%;
          flex-shrink: 0;
          max-width: 160px;
        }

        .navbar__wordmark {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0A1428;
          white-space: nowrap;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          flex: 1;
        }

        .navbar__link {
          display: block;
          padding: 6px 12px;
          font-size: 0.84rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color var(--transition-base);
          position: relative;
        }

        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px; right: 12px;
          height: 1px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-base);
        }

        .navbar__link:hover,
        .navbar__link--active {
          color: var(--accent-cyan);
        }

        .navbar__link:hover::after,
        .navbar__link--active::after {
          transform: scaleX(1);
        }

        .navbar__cta {
          flex-shrink: 0;
          cursor: pointer;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: var(--transition-base);
        }

        .hamburger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0, 102, 255, 0.08);
          padding: 24px 32px 32px;
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-menu__link {
          display: block;
          padding: 12px 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: color var(--transition-base);
        }

        .mobile-menu__link:hover { color: var(--accent-cyan); }

        @media (max-width: 900px) {
          .navbar__links { display: none; }
          .navbar__cta   { display: none; }
          .hamburger     { display: flex; }
          .navbar__inner { padding: 0 20px; }
        }

        @media (max-width: 768px) {
          .mobile-menu { padding: 20px 20px 28px; }
        }
      `}</style>
    </nav>
  )
}
