import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTechScene } from '../../hooks/useTechScene'
import styles from '../../styles/portfolio.module.css'

function TechTemplate({ tech }) {
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  useTechScene(canvasRef)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.55, ease: 'power2.out' },
      )

      gsap.fromTo(
        '[data-tech-reveal]',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.1 },
      )

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', delay: 0.12 },
      )
    }, pageRef)

    return () => context.revert()
  }, [])

  const handleBack = (event) => {
    event.preventDefault()
    gsap.to(pageRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.35,
      ease: 'power2.inOut',
      onComplete: () => navigate('/'),
    })
  }

  return (
    <main className={styles.techPage} ref={pageRef}>
      <div className={styles.sectionInner}>
        <button type="button" onClick={handleBack} className={styles.backButton} data-tech-reveal>
          ← Back to Portfolio
        </button>

        <section className={styles.techHero} ref={heroRef}>
          <div>
            <div className={styles.sectionLabel}>Stack Detail</div>
            <h1 className={styles.techTitle}>{tech.name}</h1>
            <p className={styles.techTagline}>{tech.tagline}</p>
          </div>
          <div className={styles.techCanvasWrap}>
            <canvas ref={canvasRef} className={styles.techCanvas} aria-label={`${tech.name} scene`} />
          </div>
        </section>

        <section className={styles.techBlock} data-tech-reveal>
          <h2 className={styles.techBlockTitle}>What I Know</h2>
          <div className={styles.techColumns}>
            <article className={styles.techCard}>
              <h3>Core Concepts</h3>
              <ul>
                {tech.knowledge.concepts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.techCard}>
              <h3>Practical Skills</h3>
              <ul>
                {tech.knowledge.practical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.techCard}>
              <h3>APIs / Architecture</h3>
              <ul>
                {tech.knowledge.apis.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.techBlock} data-tech-reveal>
          <h2 className={styles.techBlockTitle}>My Experience</h2>
          <div className={styles.techList}>
            {tech.experience.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className={styles.techBlock} data-tech-reveal>
          <h2 className={styles.techBlockTitle}>Projects Using This Tech</h2>
          <div className={styles.techProjects}>
            {tech.projects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className={styles.techProjectLink}>
                {project.name} →
              </a>
            ))}
          </div>
        </section>

        <div className={styles.techBottomRow} data-tech-reveal>
          <Link to="/" className={styles.btnOutline}>
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default TechTemplate
