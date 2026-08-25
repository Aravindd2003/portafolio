import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)

    let animId
    let ringX = 0, ringY = 0
    const animate = () => {
      setRing(prev => {
        ringX += (pos.x - ringX) * 0.12
        ringY += (pos.y - ringY) * 0.12
        return { x: ringX, y: ringY }
      })
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const handleEnter = () => setHovered(true)
    const handleLeave = () => setHovered(false)
    const interactives = document.querySelectorAll('a, button, .skill-pill, .glass-card, .social-icon')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animId)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}
