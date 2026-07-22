import { useEffect, useState } from 'react'
import { ShopProvider } from './context/ShopContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './components/Admin'

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  return hash.startsWith('/') ? hash : `/${hash}`
}

function PublicSite() {
  return (
    <div className="bg-mesh min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return <ShopProvider>{route.startsWith('/admin') ? <Admin /> : <PublicSite />}</ShopProvider>
}
