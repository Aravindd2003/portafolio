import { useEffect } from 'react'

const achievements = [
  {
    icon: '🏆',
    badge: 'Achievement',
    badgeClass: 'badge-gold',
    title: 'Paper Presentation Winner',
    desc: 'Won first place at the Symposium held at Jeppiar Engineering College, Chennai. Presented cutting-edge research in the domain of Computer Science.',
    meta: 'Feb – Mar 2024',
  },
  {
    icon: '📊',
    badge: 'Certification',
    badgeClass: 'badge-blue',
    title: 'Data Visualisation',
    desc: 'Completed an industry-recognized Data Visualisation programme through Forage, covering dashboards, analytics, and visual storytelling techniques.',
    meta: 'Oct 2023 – Jan 2024 · Forage',
  },
  {
    icon: '🏛️',
    badge: 'Government Certification',
    badgeClass: 'badge-violet',
    title: 'State Planning Commission & SDG Coordination Centre',
    desc: 'Developed data visualizations and analytical reports for the Government of Tamil Nadu. Certificate of recognition issued by Ramesh Chand Meena, IAS.',
    meta: 'Jun – Jul 2024 · Chennai',
  },
]

export default function Achievements() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll('.achievement-card'), {
        max: 6,
        speed: 400,
        glare: true,
        'max-glare': 0.08,
      })
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 50%, #0a0a0a 100%)' }}>
      <div className="container">
        <p className="section-tag reveal">// Recognition</p>
        <h2 className="section-title reveal">
          Achievements &amp; <span>Certifications</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              className={`glass-card achievement-card reveal${i === 2 ? ' col-span-full' : ''}`}
              key={i}
              style={{
                transitionDelay: `${i * 120}ms`,
                ...(i === 2 ? { gridColumn: '1 / -1' } : {}),
              }}
            >
              <div className="achievement-icon">{item.icon}</div>
              <div>
                <span className={`achievement-badge ${item.badgeClass}`}>{item.badge}</span>
                <div className="achievement-title">{item.title}</div>
                <div className="achievement-desc">{item.desc}</div>
                <div style={{
                  marginTop: '12px',
                  fontSize: '0.78rem',
                  color: 'var(--accent-blue)',
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                  📅 {item.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
