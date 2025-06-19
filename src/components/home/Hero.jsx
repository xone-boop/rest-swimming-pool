import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const Hero = () => {
  const whatsappMessage = "Halo Rest Swimming Pool! Saya ingin konsultasi tentang kolam renang."
  const whatsappUrl = `https://wa.me/6285359590806?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="hero-wave">
      <div className="wave-content container mx-auto px-4">
        <h1>
          Ahlinya Kolam Renang Anda!
        </h1>
        <p>
          Kami menyediakan layanan profesional untuk desain, konstruksi, renovasi, dan perawatan kolam renang Anda. 
          Dengan pengalaman bertahun-tahun, kami siap mewujudkan kolam renang impian Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="simple-btn inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Hubungi Kami di WhatsApp
          </a>
          
          <a
            href="tel:+6285359590806"
            className="simple-btn inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold text-lg rounded-full border-2 border-white/40"
          >
            <FaPhone className="mr-3" />
            +62 853-5959-0806
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 