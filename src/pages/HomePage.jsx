import { lazy, Suspense, useMemo, useState } from 'react'
import BackgroundLayers from '../components/effects/BackgroundLayers'
import CustomCursor from '../components/effects/CustomCursor'
import Loader from '../components/effects/Loader'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import HeroRecruiters from '../components/sections/HeroRecruiters'
import ProjectsRecruiter from '../components/sections/ProjectsRecruiter'
import WhyHireMe from '../components/sections/WhyHireMe'
import { usePortfolioAnimations } from '../hooks/usePortfolioAnimations'
import styles from '../styles/portfolio.module.css'

const Skills = lazy(() => import('../components/sections/Skills'))
const Experience = lazy(() => import('../components/sections/Experience'))
const ContactRecruiter = lazy(() => import('../components/sections/ContactRecruiter'))

function HomePage() {
  const [loaded, setLoaded] = useState(false)

  usePortfolioAnimations({ ready: loaded })

  const deferredSections = useMemo(
    () => [
      <Skills key="skills" />,
      <ProjectsRecruiter key="projects" />,
      <WhyHireMe key="whyHireMe" />,
      <Experience key="experience" />,
      <ContactRecruiter key="contact" />,
    ],
    [],
  )

  return (
    <div className={styles.pageRoot}>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <BackgroundLayers />
      <Navbar />

      <main>
        <HeroRecruiters />
        <Suspense fallback={null}>{deferredSections}</Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
