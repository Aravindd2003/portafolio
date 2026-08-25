import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Initialize scroll reveal after load
  useEffect(() => {
    if (!loaded) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  // Smooth-scroll all anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      target?.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Preloader */}
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      {/* Starfield particles */}
      <ParticleCanvas />

      {/* Main layout */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}