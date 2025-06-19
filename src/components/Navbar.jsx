import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Kami', path: '/about' },
    { label: 'Layanan', path: '/layanan' },
    { label: 'Produk', path: '/products' },
    { label: 'Kontak', path: '/kontak' },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand - Clean version */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Rest Swimming Pool Logo" 
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback jika logo ga ada - show text only
                e.target.style.display = 'none'
              }}
            />
            <span className="text-2xl font-bold text-primary">Rest Swimming Pool</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar