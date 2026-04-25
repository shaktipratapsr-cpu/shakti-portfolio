import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '../../styles/portfolio.module.css'

function ContactRecruiter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-contact-item]', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xannjplj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent! I'll respond soon." })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Try emailing me directly.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    }

    setLoading(false)
  }

  return (
    <section id="contact" ref={sectionRef} className={styles.contactRecruiterSection}>
      <div className={styles.sectionInnerRecruiter}>
        <div className={styles.sectionHeaderRecruiter}>
          <h2 className={styles.sectionTitleRecruiter}>
            Let's <span>Work Together</span>
          </h2>
          <p className={styles.sectionDescRecruiter}>
            Open to full-time roles, contract projects, and internships. Let's build something great.
          </p>
        </div>

        <div className={styles.contactGridRecruiter}>
          <div className={styles.contactMethods} data-contact-item>
            <h3>Quick Links</h3>
            <div className={styles.methodsList}>
              <a href="mailto:shaktipratapsr@gmail.com" className={styles.methodLink}>
                <span>✉</span>
                shaktipratapsr@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/shakti-pratap-singh-05b330256" target="_blank" rel="noreferrer" className={styles.methodLink}>
                <span>in</span>
                LinkedIn
              </a>
              <a href="https://github.com/shaktipratapsr-cpu" target="_blank" rel="noreferrer" className={styles.methodLink}>
                <span>⌘</span>
                GitHub
              </a>
              <a href="tel:+919560998337" className={styles.methodLink}>
                <span>📱</span>
                +91 9560 998 337
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit} data-contact-item>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                required
                rows="5"
                className={styles.formTextarea}
              />
            </div>

            {status && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={loading} className={styles.submitButton}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactRecruiter
