import { STATS } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>01 - About Me</div>
        <h2 className={styles.sectionTitle}>
          Building at the
          <br />
          <span>frontier</span> of web + AI
        </h2>

        <div className={styles.aboutGrid} data-reveal>
          <div className={styles.aboutText}>
            <p>
              I&apos;m a <strong>B.Tech Computer Science student</strong> (DCRUST Murthal, 2026) and Full Stack Developer Intern at{' '}
              <strong>NIIT Limited, Gurugram</strong> - spending 6+ months shipping real products that users actually interact with.
            </p>
            <p>
              My focus is building web applications that are <strong>fast, scalable, and AI-augmented</strong>. I&apos;ve integrated AI APIs,
              payment gateways, and map services into production apps, and I&apos;m deeply curious about <strong>MCP (Model Context Protocol)</strong>{' '}
              architectures that let AI models interact with real tooling.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring the bleeding edge of AI developer tooling - Antigravity, A2UI, and workflow automation that
              bridges the gap between prompts and production code.
            </p>
          </div>

          <div className={styles.aboutStats}>
            {STATS.map((stat) => (
              <article key={stat.label} className={styles.statCard} data-reveal>
                <div className={styles.statNum} data-counter data-value={stat.value} data-suffix={stat.suffix}>
                  0{stat.suffix}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
