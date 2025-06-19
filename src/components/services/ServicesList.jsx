import { FaSwimmingPool, FaTools, FaWrench, FaFilter } from 'react-icons/fa'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Pembuatan Kolam Renang',
    description: 'Layanan konstruksi kolam renang profesional dengan desain custom sesuai keinginan Anda. Kami menggunakan material berkualitas tinggi dan teknologi modern untuk hasil terbaik.',
    icon: FaSwimmingPool,
  },
  {
    title: 'Perawatan Berkala',
    description: 'Program perawatan rutin untuk menjaga kebersihan dan kualitas air kolam renang Anda. Termasuk pembersihan, pengecekan kimia air, dan perawatan sistem filtrasi.',
    icon: FaTools,
  },
  {
    title: 'Perbaikan Kebocoran',
    description: 'Deteksi dan perbaikan kebocoran kolam renang dengan teknologi modern. Kami menangani berbagai masalah struktural dengan solusi yang tepat dan tahan lama.',
    icon: FaWrench,
  },
  {
    title: 'Pemasangan Filter & Sistem Sirkulasi',
    description: 'Instalasi dan upgrade sistem filtrasi dan sirkulasi air kolam renang. Menggunakan peralatan berstandar internasional untuk performa optimal.',
    icon: FaFilter,
  },
]

const ServicesList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
