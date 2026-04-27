import { Navigate, useParams } from 'react-router-dom'
import BackgroundLayers from '../components/effects/BackgroundLayers'
import CustomCursor from '../components/effects/CustomCursor'
import Navbar from '../components/layout/Navbar'
import ProjectTemplate from '../components/sections/ProjectTemplate'
import { getProjectEntry } from '../data/portfolioData'
import styles from '../styles/portfolio.module.css'

function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = getProjectEntry(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={styles.pageRoot}>
      <CustomCursor />
      <BackgroundLayers />
      <Navbar />
      <ProjectTemplate project={project} />
    </div>
  )
}

export default ProjectDetailPage