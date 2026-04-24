import { EXPERIENCE } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>04 - Experience</div>
        <h2 className={styles.sectionTitle}>
          Where I&apos;ve
          <br />
          <span>worked</span>
        </h2>

        <div className={styles.expTimeline} data-reveal>
          {EXPERIENCE.map((item) => (
            <article key={`${item.period}-${item.title}`} className={styles.expItem}>
              <div className={styles.expDot} />
              <div className={styles.expPeriod}>{item.period}</div>
              <h3 className={styles.expTitle}>{item.title}</h3>
              <div className={styles.expCompany}>
                <span>{item.company}</span> - {item.location}
              </div>
              <ul className={styles.expBullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
