import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); handleNav('#hero') }}>
          AD
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href) }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/assets/resume.pdf" className="nav-cta" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href) }}>
            {l.label}
          </a>
        ))}
        <a href="/assets/resume.pdf" target="_blank" rel="noreferrer"
          style={{ color: 'var(--accent-blue)', border: '1px solid rgba(0,212,255,0.3)', padding: '12px 32px', borderRadius: '50px', fontSize: '1rem' }}>
          Download Resume
        </a>
      </div>
    </>
  )
}
