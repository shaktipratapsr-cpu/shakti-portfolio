import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/portfolioData'
import fallbackImage from '../../assets/hero.png'
import styles from '../../styles/portfolio.module.css'

gsap.registerPlugin(ScrollTrigger)

function ProjectsRecruiter() {
  const sectionRef = useRef(null)
  const orderedProjects = [...PROJECTS].sort((left, right) => Number(right.featured) - Number(left.featured))

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === 'true') return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = fallbackImage
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-project-item]',
        { y: 24, opacity: 1 },
        {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className={styles.projectsRecruiterSection}>
      <div className={styles.sectionInnerRecruiter}>
        <div className={styles.sectionHeaderRecruiter}>
          <div className={styles.sectionLabel}>Featured Work</div>
          <h2 className={styles.sectionTitleRecruiter}>
            Projects That Ship <span>Real Impact</span>
          </h2>
          <p className={styles.sectionDescRecruiter}>
            Full-stack applications built with React + Node.js, deployed to production, and optimized for performance.
          </p>
        </div>

        <div className={styles.projectsGridRecruiter}>
          {orderedProjects.map((project) => (
            <Link key={project.name} to={`/project/${project.slug}`} className={styles.projectCardRecruiterLink}>
            <article className={styles.projectCardRecruiter} data-project-item>
              <div className={styles.projectImageWrap}>
                <img
                  src={project.images?.[0] || fallbackImage}
                  alt={project.name}
                  className={styles.projectImage}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
                {project.featured && <div className={styles.projectBadgeFeatured}>Featured</div>}
              </div>

              {project.images?.length > 1 && (
                <div className={styles.projectThumbStrip}>
                  {project.images.slice(1).map((image, index) => (
                    <img
                      key={`${project.name}-${index}`}
                      src={image}
                      alt={`${project.name} preview ${index + 2}`}
                      className={styles.projectThumb}
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />
                  ))}
                </div>
              )}

              <div className={styles.projectInfoRecruiter}>
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitleRecruiter}>{project.name}</h3>
                  {project.problem && (
                    <div className={styles.projectProblem}>
                      <span className={styles.problemLabel}>Problem:</span> {project.problem}
                    </div>
                  )}
                  {project.solution && (
                    <div className={styles.projectSolution}>
                      <span className={styles.problemLabel}>Solution:</span> {project.solution}
                    </div>
                  )}
                  {project.impact && <div className={styles.projectImpact}>📈 {project.impact}</div>}
                </div>

                <p className={styles.projectDescRecruiter}>{project.description}</p>

                <ul className={styles.projectHighlightsRecruiter}>
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className={styles.projectTechRecruiter}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.techBadge}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.projectCtaRecruiter}>
                  <span className={styles.projectDetailHint}>Open to view all screenshots and live demo</span>
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsRecruiter
