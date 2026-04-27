import styles from '../../styles/portfolio.module.css'
import ResumeButton from '../layout/ResumeButton'

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroEyebrow} data-hero-eyebrow>
        Available for Full-Time Roles - Gurugram / Bangalore
      </div>
      <h1 className={styles.heroName} data-text="Shakti Pratap Singh" data-hero-name>
        Shakti Pratap <span>Singh</span>
      </h1>
      <div className={styles.heroRole} data-hero-role>
        Full Stack Developer &amp; AI Application Builder
      </div>
      <p className={styles.heroDesc} data-hero-desc>
        Building production-grade web experiences at the intersection of <strong>React</strong>, <strong>Node.js</strong>, and{' '}
        <span className={styles.orangeText}>AI-powered architectures</span>. Currently interning at NIIT Limited, Gurugram.
      </p>
      <div className={styles.heroCta} data-hero-cta>
        <ResumeButton withMeta className={styles.heroResumeButton} />
        <a href="#projects" className={styles.btnPrimary}>
          View Projects →
        </a>
        <a href="#contact" className={styles.btnOutline}>
          Get in Touch
        </a>
      </div>
      <div className={styles.heroScroll} data-hero-scroll>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}

export default Hero
