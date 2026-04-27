import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from '../../styles/portfolio.module.css'

gsap.registerPlugin(ScrollTrigger)

function WhyHireMe() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-why-item]',
        { x: -16, opacity: 1 },
        {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const reasons = [
    {
      title: 'Shipped production apps',
      desc: '3+ live apps already shipped, including AI-powered and ecommerce experiences.',
    },
    {
      title: 'Improved performance',
      desc: 'Delivered a 30% page-load improvement through React optimization and lazy loading.',
    },
    {
      title: 'Integrated real APIs',
      desc: 'Worked across 5+ integrations: AI, payment, map, and other production endpoints.',
    },
    {
      title: 'Strong full-stack range',
      desc: 'React, Node.js, Express, MongoDB, and MCP architecture for end-to-end ownership.',
    },
    {
      title: 'Fast learner, low overhead',
      desc: 'Picked up A2UI, Antigravity, and rrweb quickly and applied them to shipped work.',
    },
  ]

  return (
    <section id="whyHireMe" ref={sectionRef} className={styles.whyHireMeSection}>
      <div className={styles.sectionInnerRecruiter}>
        <div className={styles.sectionHeaderRecruiter}>
          <h2 className={styles.sectionTitleRecruiter}>
            Why <span>Hire Me</span>
          </h2>
          <p className={styles.sectionDescRecruiter}>
            Evidence from the work already shipped in production and internship delivery.
          </p>
        </div>

        <div className={styles.whyGridRecruiter}>
          {reasons.map((reason) => (
            <div key={reason.title} className={styles.whyCard} data-why-item>
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
