import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import fallbackImage from '../../assets/hero.png'
import styles from '../../styles/portfolio.module.css'

function ProjectTemplate({ project }) {
  const navigate = useNavigate()
  const pageRef = useRef(null)

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === 'true') return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = fallbackImage
  }

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' })
      gsap.fromTo(
        '[data-project-reveal]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.1 },
      )
    }, pageRef)

    return () => context.revert()
  }, [])

  const handleBack = (event) => {
    event.preventDefault()
    gsap.to(pageRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.28,
      ease: 'power2.inOut',
      onComplete: () => navigate('/'),
    })
  }

  return (
    <main className={styles.techPage} ref={pageRef}>
      <div className={styles.sectionInner}>
        <button type="button" onClick={handleBack} className={styles.backButton} data-project-reveal>
          ← Back to Portfolio
        </button>

        <section className={styles.projectDetailHero} data-project-reveal>
          <div>
            <div className={styles.sectionLabel}>Project Detail</div>
            <h1 className={styles.projectDetailTitle}>{project.name}</h1>
            <p className={styles.projectDetailTagline}>{project.description}</p>
          </div>

          <div className={styles.projectDetailActions}>
            {project.links.map((link) =>
              link.disabled ? (
                <span key={link.label} className={styles.linkDisabled}>
                  {link.label}
                </span>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
                  {link.label} →
                </a>
              ),
            )}
          </div>
        </section>

        <section className={styles.projectGallery} data-project-reveal>
          {project.images.map((image, index) => (
            <article key={`${project.slug}-${index}`} className={styles.projectGalleryCard}>
              <img
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                className={styles.projectGalleryImage}
                loading="lazy"
                decoding="async"
                onError={handleImageError}
              />
            </article>
          ))}
        </section>

        <section className={styles.projectDetailGrid} data-project-reveal>
          <article className={styles.techCard}>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </article>
          <article className={styles.techCard}>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </article>
          <article className={styles.techCard}>
            <h3>Impact</h3>
            <p>{project.impact}</p>
          </article>
        </section>

        <section className={styles.techBlock} data-project-reveal>
          <h2 className={styles.techBlockTitle}>Highlights</h2>
          <div className={styles.projectHighlightsGrid}>
            {project.highlights.map((highlight) => (
              <p key={highlight} className={styles.projectHighlightItem}>
                {highlight}
              </p>
            ))}
          </div>
        </section>

        <div className={styles.techBottomRow} data-project-reveal>
          <Link to="/" className={styles.btnOutline}>
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ProjectTemplate