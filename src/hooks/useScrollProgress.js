import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [scrollY, setScrollY]     = useState(0)
  const [progress, setProgress]   = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const top       = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setScrollY(top)
      setProgress(docHeight > 0 ? top / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollY, progress }
}
