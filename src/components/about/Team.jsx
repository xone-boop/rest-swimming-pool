const team = [
  {
    name: 'Ahmad Wijaya',
    role: 'Direktur Utama',
    description: 'Berpengalaman 15 tahun dalam industri kolam renang',
  },
  {
    name: 'Budi Santoso',
    role: 'Kepala Teknisi',
    description: 'Ahli dalam desain dan konstruksi kolam renang',
  },
  {
    name: 'Diana Putri',
    role: 'Manajer Proyek',
    description: 'Spesialis dalam manajemen proyek kolam renang',
  },
  {
    name: 'Rudi Hermawan',
    role: 'Teknisi Senior',
    description: 'Pakar dalam maintenance dan perbaikan kolam',
  },
]

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim Ahli Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dipimpin oleh para profesional berpengalaman dalam industri kolam renang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200">
                {/* Placeholder for team member photo */}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
