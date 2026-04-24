import { useRef } from 'react'
import { useHeroScene } from '../../hooks/useHeroScene'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import styles from '../../styles/portfolio.module.css'

function BackgroundLayers() {
  const heroCanvasRef = useRef(null)
  const progressRef = useRef(null)

  useHeroScene(heroCanvasRef)
  useScrollProgress(progressRef)

  return (
    <>
      <canvas ref={heroCanvasRef} className={styles.heroCanvas} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={`${styles.glowOrb} ${styles.orbCyan}`} aria-hidden="true" />
      <div className={`${styles.glowOrb} ${styles.orbOrange}`} aria-hidden="true" />
      <div ref={progressRef} className={styles.scrollProgress} aria-hidden="true" />
    </>
  )
}

export default BackgroundLayers
