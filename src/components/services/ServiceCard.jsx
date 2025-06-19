import { FaWhatsapp } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-6"
        loading="lazy"
        width="300"
        height="200"
      />
      <div className="text-primary mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20kolam%20renang%20Anda"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
      >
        <FaWhatsapp className="mr-2" size={20} />
        Hubungi Kami via WhatsApp
      </a>
    </div>
  )
}

export default ServiceCard
