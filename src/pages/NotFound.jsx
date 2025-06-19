import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. 
          Silakan kembali ke halaman utama atau hubungi kami jika Anda memerlukan bantuan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            <FaHome className="mr-2" />
            Kembali ke Beranda
          </Link>
          <Link
            to="/kontak"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors"
          >
            <FaSearch className="mr-2" />
            Butuh Bantuan?
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
