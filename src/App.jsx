import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    // Temporarily disable Service Worker to avoid errors
    // Uncomment when ready for production
    /*
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('SW registered:', registration)
          })
          .catch(error => {
            console.log('SW registration failed:', error)
          })
      })
    }
    */
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App