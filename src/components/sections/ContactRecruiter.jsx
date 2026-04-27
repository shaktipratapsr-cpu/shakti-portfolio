import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import styles from '../../styles/portfolio.module.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function validateContactForm(values) {
  const nextErrors = {}
  const trimmedName = values.name.trim()
  const trimmedEmail = values.email.trim()
  const trimmedMessage = values.message.trim()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!trimmedName) {
    nextErrors.name = 'Name is required.'
  }

  if (!trimmedEmail) {
    nextErrors.email = 'Email is required.'
  } else if (!emailPattern.test(trimmedEmail)) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (!trimmedMessage) {
    nextErrors.message = 'Message is required.'
  }

  return nextErrors
}

function FieldError({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className={styles.formError}>
      {message}
    </p>
  )
}

function ContactRecruiter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
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
    const nextFormData = { ...formData, [name]: value }
    setFormData(nextFormData)

    if (errors[name]) {
      const nextErrors = validateContactForm(nextFormData)
      setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateContactForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({ type: 'error', message: 'Email service is not configured yet. Add EmailJS environment variables.' })
      return
    }

    setLoading(true)
    setStatus(null)
    setErrors({})

    try {
      const trimmedValues = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmedValues.name,
          email: trimmedValues.email,
          message: trimmedValues.message,
          from_name: trimmedValues.name,
          from_email: trimmedValues.email,
          reply_to: trimmedValues.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
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

          <form className={styles.contactForm} onSubmit={handleSubmit} data-contact-item noValidate>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              <FieldError id="name-error" message={errors.name} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <FieldError id="email-error" message={errors.email} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                rows="5"
                className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <FieldError id="message-error" message={errors.message} />
            </div>

            {status && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={loading} className={`${styles.submitButton} ${loading ? styles.submitButtonLoading : ''}`}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactRecruiter
