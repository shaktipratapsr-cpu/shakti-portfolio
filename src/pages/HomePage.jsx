import { lazy, Suspense, useMemo, useState } from 'react'
import BackgroundLayers from '../components/effects/BackgroundLayers'
import CustomCursor from '../components/effects/CustomCursor'
import Loader from '../components/effects/Loader'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import { usePortfolioAnimations } from '../hooks/usePortfolioAnimations'
import styles from '../styles/portfolio.module.css'

const About = lazy(() => import('../components/sections/About'))
const Skills = lazy(() => import('../components/sections/Skills'))
const Projects = lazy(() => import('../components/sections/Projects'))
const Experience = lazy(() => import('../components/sections/Experience'))
const Contact = lazy(() => import('../components/sections/Contact'))

function HomePage() {
  const [loaded, setLoaded] = useState(false)

  usePortfolioAnimations({ ready: loaded })

  const deferredSections = useMemo(
    () => [
      <About key="about" />,
      <Skills key="skills" />,
      <Projects key="projects" />,
      <Experience key="experience" />,
      <Contact key="contact" />,
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
        <Hero />
        <Suspense fallback={null}>{deferredSections}</Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
