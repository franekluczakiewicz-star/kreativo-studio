import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Shop from './components/Shop'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <CartProvider>
      <div className="bg-mesh min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Shop />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
