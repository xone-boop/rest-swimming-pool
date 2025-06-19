import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa'

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: 'Alamat',
    content: 'Jl. Kolam Renang No. 123, Medan, Sumatera Utara',
  },
  {
    icon: FaPhone,
    title: 'Telepon/WhatsApp',
    content: '+62 853-5959-0806',
    link: 'https://wa.me/6285359590806',
    linkText: 'Chat WhatsApp'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'bgmn973@gmail.com',
    link: 'mailto:bgmn973@gmail.com',
    linkText: 'Kirim Email'
  },
  {
    icon: FaClock,
    title: 'Jam Kerja',
    content: 'Senin - Sabtu: 08.00 – 17.00\nMinggu: 09.00 - 15.00',
  },
]

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Google Maps Placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          title="Rest Swimming Pool Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63459.78134729508!2d98.61611143481685!3d3.5951956911839535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f7d7ee8cded%3A0x48017fcf7ad56f9!2sMedan%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1671123456789!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-primary mt-1">
              <detail.icon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{detail.content}</p>
              {detail.link && (
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  {detail.title === 'Telepon/WhatsApp' && <FaWhatsapp className="mr-1" />}
                  {detail.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4">Hubungi Kami Sekarang</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://wa.me/6285359590806?text=Halo%20Rest%20Swimming%20Pool%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20kolam%20renang."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <FaWhatsapp className="mr-2" />
            Chat WhatsApp
          </a>
          <a
            href="mailto:bgmn973@gmail.com?subject=Inquiry%20Rest%20Swimming%20Pool&body=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20kolam%20renang."
            className="flex items-center justify-center px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Kirim Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo