import { useEffect } from 'react'

export function useScrollProgress(progressRef) {
  useEffect(() => {
    const progress = progressRef.current
    if (!progress) return undefined

    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const ratio = total <= 0 ? 0 : window.scrollY / total
      progress.style.width = `${Math.max(0, Math.min(100, ratio * 100))}%`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [progressRef])
}
