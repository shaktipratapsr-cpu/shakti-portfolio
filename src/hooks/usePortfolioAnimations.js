import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePortfolioAnimations({ ready }) {
  useEffect(() => {
    if (!ready) return undefined

    const context = gsap.context(() => {
      gsap.to('[data-nav]', { opacity: 1, duration: 0.8, delay: 0.2 })

      const heroTimeline = gsap.timeline({ delay: 0.1 })
      heroTimeline
        .to('[data-hero-eyebrow]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        .to('[data-hero-name]', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
        .to('[data-hero-role]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to('[data-hero-desc]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .to('[data-hero-cta]', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .to('[data-hero-scroll]', { opacity: 1, duration: 0.6 }, '-=0.2')

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      gsap.utils.toArray('[data-counter]').forEach((element) => {
        const target = Number(element.getAttribute('data-value') || 0)
        const suffix = element.getAttribute('data-suffix') || ''

        gsap.fromTo(
          { value: 0 },
          { value: target },
          {
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              once: true,
            },
            onUpdate() {
              element.textContent = `${Math.floor(this.targets()[0].value)}${suffix}`
            },
          },
        )
      })

      gsap.from('[data-project-card]', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-projects-grid]',
          start: 'top 80%',
        },
      })
    })

    return () => {
      context.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [ready])
}
