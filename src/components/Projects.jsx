import { useEffect } from 'react'

const projects = [
  {
    title: 'Agilis Advisors',
    category: 'Business / Advisory Website',
    desc: 'A responsive, production-ready business website built with a JSON-based content system, letting the team update content and images without touching the frontend code. Focused on clean UI, usability, and cross-device consistency.',
    tech: ['React.js', 'Tailwind CSS', 'Responsive Design', 'CMS'],
    demo: 'https://www.agilisadvisors.com',
    github: '#',
    image: '🏢',
  },
  {
    title: 'Spare-Xpat',
    category: 'Second-Hand Marketplace Platform',
    desc: 'A full buyer-seller marketplace with reusable React modules for listings, product bundles, seller profiles, favorites, and reviews. Includes real-time chat via Socket.IO with unread counts, typing indicators, and online presence.',
    tech: ['React.js', 'Socket.IO', 'REST API', 'Tailwind CSS'],
    demo: 'https://www.sparexpat.com',
    github: '#',
    image: '🛒',
  },
  {
    title: 'LifeConnect Blood Hero',
    category: 'Blood Donation & Emergency Matching',
    desc: 'A multi-role platform for donors, recipients, hospitals, and admins with a smart blood-matching engine (compatibility, eligibility, Haversine-based distance scoring). Real-time notifications, OCR-based Aadhaar verification, and MongoDB-backed inventory tracking — backed by 48/48 passing regression tests.',
    tech: ['React.js', 'Socket.IO', 'MongoDB', 'REST API'],
    demo: '#',
    github: '#',
    image: '🩸',
  },
]

export default function Projects() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.1,
      })
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects">
      <div className="container">
        <p className="section-tag reveal">// Portfolio Showcase</p>
        <h2 className="section-title reveal">
          Featured <span>Projects</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginTop: '20px'
        }}>
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="glass-card project-card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '32px',
                borderRadius: '24px',
                transitionDelay: `${i * 100}ms`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'var(--gradient-glow)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                opacity: 0.7,
                pointerEvents: 'none'
              }} />

              <div style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                {proj.image}
              </div>

              <div style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--accent-blue)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '6px'
              }}>
                {proj.category}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '14px'
              }}>
                {proj.title}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {proj.desc}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '28px'
              }}>
                {proj.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '50px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                <a
                  href={proj.demo}
                  className="btn-primary"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.8rem',
                    borderRadius: '12px'
                  }}
                >
                  <span>🚀 Live Demo</span>
                </a>
                <a
                  href={proj.github}
                  className="btn-secondary"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.8rem',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}