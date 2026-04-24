import { PROJECTS } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>03 - Selected Work</div>
        <h2 className={styles.sectionTitle}>
          What I&apos;ve
          <br />
          <span>shipped</span>
        </h2>

        <div className={styles.projectsGrid} data-projects-grid>
          {PROJECTS.map((project, index) => (
            <article
              key={project.name}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              data-project-card
              data-reveal
            >
              <div>
                {project.featured && <div className={styles.featuredBadge}>Featured Project</div>}
                <div className={styles.projectNum}>{project.number}</div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.highlights ? (
                  <div className={styles.projectHighlights}>
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className={styles.highlight}>
                        {highlight}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className={styles.projectLinks} style={project.featured ? { marginTop: '32px' } : undefined}>
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.projectLink}>
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>

              {!project.featured && <div className={styles.projectCardNum}>0{index + 2}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
