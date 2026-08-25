import { useEffect } from 'react'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Arshan UG',
    location: 'Berlin, Germany (Remote)',
    duration: 'Mar 2025 – Sep 2025',
    current: false,
    points: [
      'Developed features for mobile and desktop using HTML, CSS, and JS libraries',
      'Translated UX/UI designs into functional, pixel-perfect web applications',
      'Used Git for version control and collaborative development throughout the process',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Datenstrom-3ag Solutions',
    location: 'Berlin, Germany (Remote)',
    duration: 'Oct 2025 – May 2026',
    current: false,
    points: [
      'Built innovative features for mobile and desktop platforms with a focus on performance',
      'Implemented responsive design principles for seamless mobile optimization',
      'Collaborated with back-end developers to integrate APIs and deliver new features',
      'Optimized websites for cross-browser performance and accessibility compliance',
      'Integrated Git workflows to improve team collaboration and code review processes',
      'Formulated and executed SEO strategies to achieve high search engine rankings',
    ],
  },
]

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 50%, #0a0a0a 100%)' }}>
      <div className="container">
        <p className="section-tag reveal">// Work History</p>
        <h2 className="section-title reveal">
          My <span>Experience</span> (Internship)
        </h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item reveal" key={i} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-role">
                      {exp.role}
                      {exp.current && <span className="current-badge">● Current</span>}
                    </div>
                    <div className="timeline-company">
                      {exp.company} — <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{exp.location}</span>
                    </div>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>

                <ul className="timeline-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
