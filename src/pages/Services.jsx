import ServicesHero from '../components/services/ServicesHero'
import { FaTools, FaSwimmingPool, FaWrench, FaFilter, FaWhatsapp } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaSwimmingPool,
      title: "Pembuatan Kolam Renang",
      description: "Layanan konstruksi kolam renang profesional dengan desain custom sesuai keinginan Anda. Kami menggunakan material berkualitas tinggi dan teknologi modern untuk hasil terbaik.",
      image: "/images/services/pool-construction.jpg"
    },
    {
      icon: FaTools,
      title: "Perawatan Berkala", 
      description: "Program perawatan rutin untuk menjaga kebersihan dan kualitas air kolam renang Anda. Termasuk pembersihan, pengecekan kimia air, dan perawatan sistem filtrasi.",
      image: "/images/services/pool-maintenance.jpg"
    },
    {
      icon: FaWrench,
      title: "Perbaikan & Renovasi",
      description: "Deteksi dan perbaikan kebocoran kolam renang dengan teknologi modern. Kami menangani berbagai masalah struktural dengan solusi yang tepat dan tahan lama.",
      image: "/images/services/pool-repair.jpg"
    },
    {
      icon: FaFilter,
      title: "Sistem Filtrasi",
      description: "Instalasi dan upgrade sistem filtrasi dan sirkulasi air kolam renang. Menggunakan peralatan berstandar internasional untuk performa optimal.",
      image: "/images/services/pool-filtration.jpg"
    }
  ]

  const whatsappMessage = "Halo Rest Swimming Pool! Saya ingin konsultasi tentang layanan kolam renang."
  const whatsappUrl = `https://wa.me/6285359590806?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div>
      <ServicesHero />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semua Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan kolam renang Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                {/* Icon */}
                <div className="text-primary mb-6 flex justify-center">
                  <service.icon size={64} />
                </div>

                {/* Image (optional - will show gradient if no image) */}
                <div className="mb-6 h-40 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient background
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #0066cc, #00aaff)'
                      e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-white font-semibold">Layanan ' + service.title + '</div>'
                    }}
                  />
                </div>

                {/* Title and description */}
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <div className="text-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    Hubungi Kami via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services