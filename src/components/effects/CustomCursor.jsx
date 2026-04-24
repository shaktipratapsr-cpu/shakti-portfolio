import { useRef } from 'react'
import { useCustomCursor } from '../../hooks/useCustomCursor'
import styles from '../../styles/portfolio.module.css'

function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useCustomCursor(cursorRef, ringRef)

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} aria-hidden="true" />
      <div ref={ringRef} className={styles.cursorRing} aria-hidden="true" />
    </>
  )
}

export default CustomCursor
