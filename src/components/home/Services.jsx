import { FaTools, FaSwimmingPool, FaWrench, FaFilter } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaSwimmingPool,
      title: "Pembuatan Kolam",
      description: "Layanan konstruksi kolam renang profesional dengan desain custom sesuai keinginan Anda. Kami menggunakan material berkualitas tinggi dan teknologi modern untuk hasil terbaik.",
      image: "/images/services/pool-construction.jpg"
    },
    {
      icon: FaTools,
      title: "Perawatan Kolam", 
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan kolam renang Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
            >
              {/* Icon at top (original position) */}
              <div className="text-primary mb-4 flex justify-center">
                <service.icon size={48} />
              </div>

              {/* Image in center */}
              <div className="mb-4 h-32 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to gradient background
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #0066cc, #00aaff)'
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-white text-sm">Service Image</div>'
                  }}
                />
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services