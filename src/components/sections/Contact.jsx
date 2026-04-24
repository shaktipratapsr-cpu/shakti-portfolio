import { useEffect, useState } from 'react'
import { CONTACT_LINKS } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!sent) return undefined

    const timeoutId = window.setTimeout(() => {
      setSent(false)
    }, 3000)

    return () => window.clearTimeout(timeoutId)
  }, [sent])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>05 - Contact</div>
        <h2 className={styles.sectionTitle}>
          Let&apos;s <span>connect</span>
        </h2>

        <div className={styles.contactInner} data-reveal>
          <div className={styles.contactText}>
            <p>
              I&apos;m actively looking for Full Stack and Frontend Developer roles at startups and MNCs in Gurugram and Bangalore. If you&apos;re
              building something interesting, I&apos;d love to hear about it.
            </p>
            <div className={styles.contactLinks}>
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name
              </label>
              <input id="name" type="text" className={styles.formInput} placeholder="Jane Smith" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input id="email" type="email" className={styles.formInput} placeholder="jane@company.com" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea id="message" className={styles.formTextarea} placeholder="Tell me about the role or project..." required />
            </div>

            <button type="submit" className={styles.formSubmit}>
              {sent ? 'Message Sent ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
