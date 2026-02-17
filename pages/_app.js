import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // enable dark mode by default
    document.documentElement.classList.add('dark')

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth) * 100
      const y = (e.clientY / innerHeight) * 100

      document.documentElement.style.setProperty('--cursor-x', `${x}%`)
      document.documentElement.style.setProperty('--cursor-y', `${y}%`)
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

