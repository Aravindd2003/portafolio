import { useEffect } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design', 'API Integration', 'Node.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Design & UX',
    icon: '🎨',
    skills: ['UI/UX Implementation', 'Accessibility UX', 'Cross-Browser Compatibility', 'SEO Optimization'],
  },
  {
    category: 'Tools & Workflow',
    icon: '🛠',
    skills: ['Git & Version Control', 'Cross-Team Collaboration', 'Performance Optimization', 'CMS'],
  },
]

export default function Skills() {
  useEffect(() => {
    const pills = document.querySelectorAll('.skill-pill')
    pills.forEach((pill, i) => {
      pill.style.transitionDelay = `${i * 40}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="container">
        <p className="section-tag reveal">// Expertise</p>
        <h2 className="section-title reveal">
          Tech Stack <span>&amp; Skills</span>
        </h2>

        {skillGroups.map((group, gi) => (
          <div className="skills-category reveal" key={group.category} style={{ transitionDelay: `${gi * 100}ms` }}>
            <div className="skills-category-title">
              <span style={{ marginRight: '10px' }}>{group.icon}</span>
              {group.category}
            </div>
            <div className="skills-pills">
              {group.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="skill-pill"
                  style={{ transitionDelay: `${gi * 100 + i * 50}ms` }}
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Decorative floating skill tags */}
        <div style={{ 
          marginTop: '60px', 
          padding: '40px', 
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(123,47,255,0.04) 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center'
        }} className="reveal">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Currently exploring
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['TypeScript', 'Next.js', 'Angular.js'].map(t => (
              <span key={t} style={{
                padding: '8px 20px',
                border: '1px dashed rgba(0,212,255,0.3)',
                borderRadius: '50px',
                color: 'var(--accent-blue)',
                fontSize: '0.82rem',
                fontWeight: '500'
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
