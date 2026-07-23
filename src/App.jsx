import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-mesh min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
