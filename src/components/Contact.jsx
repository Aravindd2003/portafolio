import { useEffect, useState } from 'react'

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'mailtoaravindd03@gmail.com',
    href: 'mailto:mailtoaravindd03@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9840402289',
    href: 'tel:+919840402289',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Chennai, India 600091',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = () => {
    setSent(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
      setSent(false)
    }, 5000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-tag reveal">// Contact</p>
          <h2 className="section-title reveal" style={{ marginBottom: '16px' }}>
            Let's Build Something <span>Amazing</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Have a project in mind? Let's connect and create something extraordinary together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid reveal">
          {contactInfo.map((c) => (
            <div className="glass-card contact-card" key={c.label}>
              <div className="contact-card-icon">{c.icon}</div>
              <h3>{c.label}</h3>
              {c.href ? (
                <a href={c.href}>{c.value}</a>
              ) : (
                <p style={{ color: 'var(--text-secondary)' }}>{c.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Hidden iframe to intercept target redirect, achieving seamless background submit */}
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />

        {/* Contact Form */}
        <form 
          className="contact-form reveal" 
          action="https://formsubmit.co/mailtoaravindd03@gmail.com" 
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Honeypot spambot shield */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* FormSubmit preferences */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value={`New Portfolio Message from ${form.name || 'Visitor'}`} />

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message..."
            className="form-input form-textarea"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="btn-primary form-submit">
            <span>{sent ? '✓ Message Sent!' : '⚡ Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  )
}
