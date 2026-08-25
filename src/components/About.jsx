import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 1, suffix: '+', label: 'Years Experience' },
  { number: 2, suffix: '', label: 'Companies' },
  { number: 3, suffix: '+', label: 'Projects Delivered' },
  { number: 3, suffix: '', label: 'Languages Spoken' },
]

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    revealEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 50%, #0a0a0a 100%)' }}>
      <div className="container">
        <p className="section-tag reveal">// About Me</p>
        <h2 className="section-title reveal">
          Who I <span>Am</span>
        </h2>

        <div className="about-grid">
          {/* Bio */}
          <div className="reveal-left">
            <div className="about-bio text-justify">
              Frontend developer who builds responsive, production-ready web apps with React, JavaScript 
(ES6+), REST APIs, Tailwind CSS, and Bootstrap. Comfortable building reusable components, 
wiring up APIs, and adding real-time features with Socket.IO — across both desktop and 
mobile. Used to working closely with backend developers and stakeholders to fix issues, ship 
features, and make the whole workflow smoother.
              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="mailto:mailtoaravindd03@gmail.com" className="btn-primary">
                  <span>✉ Get In Touch</span>
                </a>
                <a href="/assets/resume.pdf" className="btn-secondary" target="_blank" rel="noreferrer">
                  ↓ Resume
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid reveal-right" ref={sectionRef}>
            {stats.map((s) => (
              <div key={s.label} className="glass-card stat-card">
                <CountUp target={s.number} suffix={s.suffix} isVisible={isVisible} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
