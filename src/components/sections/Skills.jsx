import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SKILLS } from '../../data/portfolioData'
import { useSkillsScene } from '../../hooks/useSkillsScene'
import styles from '../../styles/portfolio.module.css'

function Skills() {
  const canvasRef = useRef(null)
  useSkillsScene(canvasRef)

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>02 - Technical Skills</div>
        <h2 className={styles.sectionTitle}>
          My <span>stack</span>
        </h2>

        <div className={styles.skillsCanvasWrap} data-reveal>
          <canvas ref={canvasRef} className={styles.skillsCanvas} aria-label="3D skills visualization" />
        </div>

        <div className={styles.skillsGrid} data-reveal>
          {SKILLS.map((skill) => (
            <Link key={skill.name} to={`/stack/${skill.slug}`} className={styles.skillChip}>
              <span className={`${styles.skillDot} ${styles[skill.tone]}`} />
              {skill.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
