import { FaStore, FaShoppingBag, FaWhatsapp } from 'react-icons/fa'

const ProductCard = ({ title, description, price, image }) => {
  // WhatsApp inquiry message
  const whatsappMessage = `Halo Rest Swimming Pool! Saya tertarik dengan produk *${title}* (${price}). Bisa info lebih lanjut?`
  const whatsappUrl = `https://wa.me/6285359590806?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/images/placeholder-product.jpg'
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <p className="text-primary font-bold text-xl mb-4">{price}</p>
        
        <div className="space-y-2">
          {/* Tokopedia - ke toko utama */}
          <a
            href="https://www.tokopedia.com/greenspool/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <FaStore className="mr-2" />
            Lihat di Tokopedia
          </a>
          
          {/* Shopee - ke toko utama */}
          <a
            href="https://id.shp.ee/ARruY4N"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
          >
            <FaShoppingBag className="mr-2" />
            Lihat di Shopee
          </a>
          
          {/* WhatsApp inquiry */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <FaWhatsapp className="mr-2" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard