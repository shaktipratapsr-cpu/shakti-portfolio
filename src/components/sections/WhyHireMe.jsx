import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '../../styles/portfolio.module.css'

function WhyHireMe() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-why-item]', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const reasons = [
    {
      icon: '⚡',
      title: 'Production-Ready Code',
      desc: 'Shipped 3+ apps to production with zero critical bugs. Optimize for performance first.',
    },
    {
      icon: '🚀',
      title: 'Full-Stack Expertise',
      desc: 'React + Node.js + MongoDB. End-to-end ownership of features from UI to API to database.',
    },
    {
      icon: '🤖',
      title: 'AI Integration Specialist',
      desc: 'Integrated 5+ AI APIs. Built MCP-based systems. Comfortable with streaming, real-time, and async patterns.',
    },
    {
      icon: '📊',
      title: 'Impact-Driven',
      desc: '30% perf improvements, 95+ Lighthouse scores, 40% data handling reduction. Numbers matter.',
    },
    {
      icon: '🎯',
      title: 'Quick Learner',
      desc: 'A2UI, Antigravity, rrweb, MCP—I pick up new tools fast and ship day one.',
    },
  ]

  return (
    <section ref={sectionRef} className={styles.whyHireMeSection}>
      <div className={styles.sectionInnerRecruiter}>
        <div className={styles.sectionHeaderRecruiter}>
          <h2 className={styles.sectionTitleRecruiter}>
            Why <span>Hire Me</span>
          </h2>
          <p className={styles.sectionDescRecruiter}>
            What I bring to your team, backed by 6+ months of production experience.
          </p>
        </div>

        <div className={styles.whyGridRecruiter}>
          {reasons.map((reason) => (
            <div key={reason.title} className={styles.whyCard} data-why-item>
              <div className={styles.whyIcon}>{reason.icon}</div>
              <h3 className={styles.whyTitle}>{reason.title}</h3>
              <p className={styles.whyDesc}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
