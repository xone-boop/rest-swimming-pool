const values = [
  {
    title: 'Visi',
    content: 'Menjadi perusahaan kolam renang terdepan yang dikenal akan kualitas, inovasi, dan layanan prima di Indonesia.',
  },
  {
    title: 'Misi',
    content: 'Memberikan solusi kolam renang terbaik dengan standar kualitas tinggi dan harga yang kompetitif.',
  },
  {
    title: 'Nilai',
    content: 'Kami menjunjung tinggi profesionalisme, kejujuran, dan kepuasan pelanggan dalam setiap aspek pekerjaan.',
  },
]

const Values = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
              <p className="text-gray-600">{value.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
