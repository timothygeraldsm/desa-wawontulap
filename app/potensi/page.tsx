import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Waves, TreePine, Camera, Bed } from "lucide-react"

export default function PotensiPage() {
  const agriculturePotentials = [
    {
      icon: TreePine,
      name: "Coklat",
      description: "Perkebunan coklat berkualitas tinggi yang menjadi komoditas unggulan desa",
      area: "Lahan Produktif",
      production: "Komoditas Utama",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Leaf,
      name: "Nilam",
      description: "Tanaman nilam untuk industri parfum dan aromaterapi dengan kualitas premium",
      area: "Lahan Khusus",
      production: "Ekspor Quality",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: TreePine,
      name: "Kelapa",
      description: "Perkebunan kelapa tradisional yang mendukung ekonomi masyarakat pesisir",
      area: "Sepanjang Pantai",
      production: "Berkelanjutan",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const tourismPotentials = [
    {
      icon: Bed,
      name: "Wawontulap Beach Resort",
      description: "Resort pantai yang menjadi tonggak penting pengembangan pariwisata desa",
      features: ["Akomodasi", "Restaurant", "Water Sports", "Event Venue"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Waves,
      name: "Pantai Pasir Putih",
      description: "Pantai dengan pasir putih yang indah dan air laut yang jernih",
      features: ["Swimming", "Sunbathing", "Beach Photography", "Relaxation"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Camera,
      name: "Pulau-Pulau Eksotis",
      description: "Pulau Sepatu, Pulau Burung, Pulau Tatapaan, dan Pulau Tikus dengan keunikan masing-masing",
      features: ["Island Hopping", "Snorkeling", "Photography", "Bird Watching"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: TreePine,
      name: "Hutan Mangrove",
      description: "Kawasan hutan mangrove yang masih asri untuk ekowisata dan konservasi",
      features: ["Eco Tourism", "Mangrove Tour", "Conservation", "Education"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Potensi Desa Wawontulap</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Menggali kekayaan alam dan peluang ekonomi yang dimiliki Desa Wawontulap dalam sektor pertanian dan
              pariwisata
            </p>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Potensi Pertanian</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desa Wawontulap memiliki lahan pertanian yang subur dengan berbagai komoditas unggulan yang bernilai
              ekonomi tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agriculturePotentials.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <CardHeader className="text-center">
                  <item.icon className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-gray-900">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Luas Area:</span>
                      <span className="font-semibold text-green-600">{item.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Produksi:</span>
                      <span className="font-semibold text-green-600">{item.production}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Potensi Pariwisata</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keindahan alam pantai dan kekayaan budaya menjadikan Wawontulap destinasi wisata yang menarik dan
              berpotensi besar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourismPotentials.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl text-gray-900">{item.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fasilitas & Aktivitas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Peluang Investasi</h2>
            <p className="text-xl text-gray-600">Berbagai peluang investasi yang menjanjikan di Desa Wawontulap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-green-600">Agrowisata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pengembangan wisata perkebunan kakao dan nilam dengan konsep edukasi dan rekreasi
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tour perkebunan</li>
                  <li>• Workshop pengolahan</li>
                  <li>• Homestay petani</li>
                  <li>• Organic farming</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-600">Eco Resort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pengembangan resort ramah lingkungan dengan konsep sustainable tourism
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Eco-friendly accommodation</li>
                  <li>• Marine conservation</li>
                  <li>• Local community involvement</li>
                  <li>• Green energy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-purple-600">Industri Kreatif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Pengembangan industri kreatif berbasis budaya lokal dan hasil alam</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kerajinan tradisional</li>
                  <li>• Produk olahan laut</li>
                  <li>• Essential oil nilam</li>
                  <li>• Souvenir khas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Tertarik Berinvestasi?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan kami dalam mengembangkan potensi Desa Wawontulap untuk kemajuan bersama dan kelestarian
            lingkungan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Hubungi Pemerintah Desa
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
