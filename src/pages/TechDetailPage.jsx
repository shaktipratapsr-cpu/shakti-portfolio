import { Navigate, useParams } from 'react-router-dom'
import BackgroundLayers from '../components/effects/BackgroundLayers'
import CustomCursor from '../components/effects/CustomCursor'
import Navbar from '../components/layout/Navbar'
import TechTemplate from '../components/stack/TechTemplate'
import { getTechEntry } from '../data/techData'
import styles from '../styles/portfolio.module.css'

function TechDetailPage() {
  const { slug = '' } = useParams()
  const tech = getTechEntry(slug)

  if (!tech) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={styles.pageRoot}>
      <CustomCursor />
      <BackgroundLayers />
      <Navbar />
      <TechTemplate tech={tech} />
    </div>
  )
}

export default TechDetailPage
