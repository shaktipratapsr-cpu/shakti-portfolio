import { useEffect } from 'react'

export function useCustomCursor(cursorRef, ringRef) {
  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current

    if (!cursor || !ring || window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId = 0

    const onMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`

      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      rafId = window.requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = window.requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(rafId)
    }
  }, [cursorRef, ringRef])
}
