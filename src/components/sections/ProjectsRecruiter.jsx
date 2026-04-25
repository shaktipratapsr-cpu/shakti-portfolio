import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PROJECTS } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

gsap.registerPlugin(ScrollTrigger)

function ProjectsRecruiter() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-project-item]', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      })
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
          {PROJECTS.map((project) => (
            <article key={project.name} className={styles.projectCardRecruiter} data-project-item>
              <div className={styles.projectImageWrap}>
                <img src={project.images?.[0] || 'https://via.placeholder.com/500x300'} alt={project.name} className={styles.projectImage} />
                {project.featured && <div className={styles.projectBadgeFeatured}>Featured</div>}
              </div>

              <div className={styles.projectInfoRecruiter}>
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitleRecruiter}>{project.name}</h3>
                  {project.problem && (
                    <div className={styles.projectProblem}>
                      <span className={styles.problemLabel}>Problem:</span> {project.problem}
                    </div>
                  )}
                  {project.impact && <div className={styles.projectImpact}>📈 {project.impact}</div>}
                </div>

                <p className={styles.projectDescRecruiter}>{project.description}</p>

                <div className={styles.projectTechRecruiter}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.techBadge}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.projectCtaRecruiter}>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={link.disabled ? styles.linkDisabled : styles.linkPrimary}
                      onClick={link.disabled ? (e) => e.preventDefault() : undefined}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsRecruiter
