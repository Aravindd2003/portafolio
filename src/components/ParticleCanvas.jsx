import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.3
        this.opacity = Math.random() * 0.6 + 0.1
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        // Color: blue, violet, or white
        const colors = [
          `rgba(0, 212, 255, ${this.opacity})`,
          `rgba(123, 47, 255, ${this.opacity})`,
          `rgba(255, 255, 255, ${this.opacity * 0.5})`
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.twinkleSpeed = Math.random() * 0.02 + 0.005
        this.twinklePhase = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.twinklePhase += this.twinkleSpeed
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        const currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(this.twinklePhase))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${currentOpacity})`)
        ctx.fill()
      }
    }

    // Create 120 particles
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle())
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.03 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}
