const AboutHero = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-gray-600 mb-8">
              Kami Rest Swimming Pool hadir untuk mewujudkan impian Anda memiliki kolam renang berkualitas.
            </p>
            <p className="text-gray-600 mb-6">
              Dengan pengalaman lebih dari 10 tahun dalam industri kolam renang, kami telah membangun
              reputasi sebagai penyedia layanan kolam renang terpercaya. Setiap proyek kami kerjakan
              dengan dedikasi tinggi dan standar kualitas profesional untuk memastikan kepuasan pelanggan.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-lg aspect-[4/3] w-full">
              {/* Placeholder for about image */}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
