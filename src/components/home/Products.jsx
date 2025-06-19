import { Link } from 'react-router-dom'
import { FaStore, FaShoppingBag } from 'react-icons/fa'
import { products } from '../../data/products'

const Products = () => {
  // Get first 4 products for homepage
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Populer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai produk berkualitas untuk kolam renang Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="200"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-product.jpg'
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-primary font-bold mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              
              {/* Quick buy buttons */}
              <div className="flex gap-2">
                <a
                  href="https://www.tokopedia.com/greenspool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                  title="Beli di Tokopedia"
                >
                  <FaStore className="mr-1" size={12} />
                  Tokopedia
                </a>
                <a
                  href="https://id.shp.ee/ARruY4N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition-colors"
                  title="Beli di Shopee"
                >
                  <FaShoppingBag className="mr-1" size={12} />
                  Shopee
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Lihat Semua Produk
          </Link>
        </div>
        
        {/* Marketplace CTA */}
        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Belanja Langsung di Marketplace</h3>
            <p className="text-gray-600">Dapatkan produk kolam renang berkualitas dengan pengiriman cepat</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.tokopedia.com/greenspool/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              <FaStore className="mr-2" />
              Kunjungi Toko Tokopedia
            </a>
            <a
              href="https://id.shp.ee/ARruY4N"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
            >
              <FaShoppingBag className="mr-2" />
              Kunjungi Toko Shopee
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products