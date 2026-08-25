import { useEffect } from 'react'

const educations = [
  {
    icon: '🏫',
    school: 'Holy Family Convent',
    level: '10th Standard (SSLC)',
    gpa: '74.6%',
    year: '2018 – 2019',
  },
  {
    icon: '🎓',
    school: 'Holy Family Convent',
    level: '12th Standard (HSC)',
    gpa: '82.6%',
    year: '2020 – 2021',
  },
  {
    icon: '🏛️',
    school: 'Sri Sai Ram Engineering College',
    level: 'M.Tech CSE (5-Year Integrated)',
    gpa: '7.2 CGPA',
    year: '2021 – 2026',
  },
]

export default function Education() {
  useEffect(() => {
    // Vanilla Tilt on edu cards
    if (typeof window !== 'undefined' && window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll('.edu-card'), {
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
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education">
      <div className="container">
        <p className="section-tag reveal">// Academic Background</p>
        <h2 className="section-title reveal">
          My <span>Education</span>
        </h2>

        <div className="education-grid">
          {educations.map((edu, i) => (
            <div
              className="glass-card edu-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-level">{edu.level}</div>
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: 'var(--gradient-main)',
                  margin: '0 auto 16px',
                  borderRadius: '2px',
                }}
              />
              <div className="edu-gpa">{edu.gpa}</div>
              <div className="edu-year">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
