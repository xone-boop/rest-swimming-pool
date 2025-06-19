import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaFacebook, FaStore, FaShoppingBag } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rest Swimming Pool</h3>
            <p className="text-gray-400 mb-4">
              Ahlinya dalam desain, pembuatan, dan perawatan kolam renang profesional di Medan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/6285359590806" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors"
                title="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-gray-400 hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Toko Online</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.tokopedia.com/greenspool/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaStore className="mr-2" />
                  Tokopedia
                </a>
              </li>
              <li>
                <a 
                  href="https://id.shp.ee/ARruY4N" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <FaShoppingBag className="mr-2" />
                  Shopee
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>Jl. Kolam Renang No. 123</p>
              <p>Medan, Sumatera Utara</p>
              <p>WhatsApp: +62 853-5959-0806</p>
              <p>
                <a 
                  href="mailto:bgmn973@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  bgmn973@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rest Swimming Pool. All rights reserved.</p>
          <p className="mt-2 text-sm">Ahlinya Kolam Renang di Medan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer