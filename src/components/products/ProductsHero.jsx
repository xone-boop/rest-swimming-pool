import { FaShoppingBag, FaStore } from 'react-icons/fa'

const ProductsHero = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Produk Kolam Renang Berkualitas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Temukan berbagai perlengkapan dan peralatan kolam renang premium untuk
            menjaga kolam Anda tetap bersih dan sehat. Kami menyediakan produk
            berkualitas dengan garansi resmi dan harga kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.tokopedia.com/restswimmingpool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-lg font-semibold"
            >
              <FaStore className="mr-3 text-2xl" />
              Lihat di Tokopedia
            </a>
            <a
              href="https://shopee.co.id/restswimmingpool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors text-lg font-semibold"
            >
              <FaShoppingBag className="mr-3 text-2xl" />
              Lihat di Shopee
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Produk Original',
              description: 'Semua produk dijamin keasliannya dengan garansi resmi',
            },
            {
              title: 'Pengiriman Cepat',
              description: 'Pengiriman ke seluruh Indonesia dengan layanan ekspedisi terpercaya',
            },
            {
              title: 'Konsultasi Gratis',
              description: 'Bantuan pemilihan produk yang tepat untuk kebutuhan Anda',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsHero
