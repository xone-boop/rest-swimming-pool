import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontak & Lokasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis seputar kolam renang Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-primary mt-1">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Kolam Renang No. 123<br />
                  Medan, Sumatera Utara
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary mt-1">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telepon/WhatsApp</h3>
                <p className="text-gray-600">+62 853-5959-0806</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary mt-1">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">bgmn973@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/6285359590806?text=Halo%20Rest%20Swimming%20Pool%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20kolam%20renang."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn btn-primary"
              >
                <FaWhatsapp className="mr-2" />
                Chat WhatsApp
              </a>
              <a
                href="mailto:bgmn973@gmail.com?subject=Inquiry%20Rest%20Swimming%20Pool"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-white hover:bg-gray-50 rounded-lg font-semibold transition-colors"
              >
                <FaEnvelope className="mr-2" />
                Kirim Email
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg min-h-[400px] overflow-hidden">
            {/* Google Maps Embedded */}
            <iframe
              title="Rest Swimming Pool Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63459.78134729508!2d98.61611143481685!3d3.5951956911839535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f7d7ee8cded%3A0x48017fcf7ad56f9!2sMedan%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1671123456789!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact