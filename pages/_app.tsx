// tailwinds
import '../css/fonts.css'
import '../css/tailwind.css'
import '../css/navlink.css'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

// # Local style
import '../src/atoms/NavLink/NavLink.scss'

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class">
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp

