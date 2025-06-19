import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontak Kami</h1>
            <p className="text-xl text-gray-600">
              Hubungi kami untuk konsultasi, pemesanan, atau pertanyaan seputar kolam renang.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
