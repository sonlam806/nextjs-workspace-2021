import '../css/fonts.css'
import '../css/tailwind.css'
import '../css/navlink.css'

// # Local style
import '../src/atoms/NavLink/NavLink.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component key="the-app" {...pageProps} />
}
