import { useEffect, useState } from 'react'
import styles from '../../styles/portfolio.module.css'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timeoutId

    const intervalId = window.setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(100, previous + Math.random() * 8 + 2)
        if (next >= 100) {
          window.clearInterval(intervalId)
          timeoutId = window.setTimeout(() => onComplete(), 300)
        }
        return next
      })
    }, 60)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [onComplete])

  return (
    <div className={styles.loader} aria-live="polite" aria-label="Loading portfolio">
      <div className={styles.loaderPct}>{Math.floor(progress)}%</div>
      <div className={styles.loaderBarWrap}>
        <div className={styles.loaderBar} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.loaderText}>INITIALIZING PORTFOLIO</div>
    </div>
  )
}

export default Loader
