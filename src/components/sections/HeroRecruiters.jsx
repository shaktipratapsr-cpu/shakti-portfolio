import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '../../styles/portfolio.module.css'

function HeroRecruiters() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-title]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      )

      gsap.fromTo(
        '[data-hero-subtitle]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 },
      )

      gsap.fromTo(
        '[data-hero-stat]',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out', stagger: 0.1, delay: 0.3 },
      )

      gsap.fromTo(
        '[data-hero-cta]',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.5 },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.heroRecruiterSection}>
      <div className={styles.heroRecruiterInner}>
        <div className={styles.heroRecruiterContent}>
          <div className={styles.heroLabel}>Full Stack + AI Engineer</div>

          <h1 className={styles.heroRecruiterTitle} data-hero-title>
            Shakti Pratap Singh
          </h1>

          <p className={styles.heroRecruiterSubtitle} data-hero-subtitle>
            React • Node.js • AI APIs • MCP Architecture
          </p>

          <p className={styles.heroRecruiterDescription} data-hero-subtitle>
            I build production-grade full-stack applications at the intersection of modern web architecture and AI integration. Currently interning at NIIT Limited — shipped 3+ apps, integrated 5+ APIs, and consistently deliver zero-bug releases.
          </p>

          <div className={styles.heroRecruiterStats}>
            <div className={styles.heroRecruiterStat} data-hero-stat>
              <div className={styles.statValue}>3+</div>
              <div className={styles.statName}>Production Apps</div>
            </div>
            <div className={styles.heroRecruiterStat} data-hero-stat>
              <div className={styles.statValue}>30%</div>
              <div className={styles.statName}>Performance Gain</div>
            </div>
            <div className={styles.heroRecruiterStat} data-hero-stat>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statName}>APIs Integrated</div>
            </div>
            <div className={styles.heroRecruiterStat} data-hero-stat>
              <div className={styles.statValue}>6mo</div>
              <div className={styles.statName}>NIIT Experience</div>
            </div>
          </div>

          <div className={styles.heroRecruiterCta} data-hero-cta>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Let's Connect
            </a>
            <a href="https://www.linkedin.com/in/shakti-pratap-singh-05b330256" target="_blank" rel="noreferrer" className={styles.btnTertiary}>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.heroRecruiterVisual}>
          <div className={styles.heroRecruiterCard}>
            <div className={styles.cardGradient} />
            <div className={styles.cardContent}>
              <div className={styles.cardBadge}>Full Stack</div>
              <h3>React + Node.js</h3>
              <p>Production applications with AI integration</p>
            </div>
          </div>

          <div className={styles.heroRecruiterCard + ' ' + styles.cardSecondary}>
            <div className={styles.cardGradient} />
            <div className={styles.cardContent}>
              <div className={styles.cardBadge}>Performance</div>
              <h3>30% Faster</h3>
              <p>Through optimization & lazy loading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroRecruiters
