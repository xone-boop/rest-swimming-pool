import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Villa',
    content: 'Sangat puas dengan hasil pengerjaan kolam renang oleh tim Rest Swimming Pool. Profesional dan tepat waktu.',
    rating: 5,
  },
  {
    name: 'Diana Putri',
    role: 'Pengelola Hotel',
    content: 'Maintenance kolam yang rutin dan detail membuat kolam hotel kami selalu dalam kondisi prima.',
    rating: 5,
  },
  {
    name: 'Ahmad Rahman',
    role: 'Pemilik Rumah',
    content: 'Desain kolam yang dibuat sangat sesuai dengan keinginan. Pengerjaan rapi dan hasilnya memuaskan.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Pelanggan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka tentang layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center"
              >
                <div className="h-12 w-32 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
