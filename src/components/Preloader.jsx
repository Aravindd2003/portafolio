import { useEffect, useRef } from 'react'

export default function Preloader({ onDone }) {
  const preloaderRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        preloaderRef.current.style.opacity = '0'
        preloaderRef.current.style.transform = 'scale(1.05)'
        setTimeout(() => {
          preloaderRef.current && (preloaderRef.current.style.display = 'none')
          onDone()
        }, 800)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-logo">AD</div>
      <div className="preloader-bar" />
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
        Loading...
      </p>
    </div>
  )
}
