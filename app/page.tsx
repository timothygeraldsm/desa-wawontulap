import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Waves, TreePine, ArrowRight } from "lucide-react"

export default function HomePage() {
  const stats = [
    { icon: Users, label: "Populasi", value: "824", subtitle: "Jiwa" },
    { icon: MapPin, label: "Jumlah KK", value: "257", subtitle: "Keluarga" },
    { icon: Waves, label: "Ketinggian", value: "84", subtitle: "mdpl" },
    { icon: TreePine, label: "Jarak ke Jalan Raya", value: "30", subtitle: "km" },
  ]

  const highlights = [
    {
      title: "Wawontulap Beach Resort",
      description: "Resort pantai dengan pemandangan laut yang menakjubkan",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Pulau-pulau Eksotis",
      description: "Jelajahi Pulau Tatapaan, Sepatu, Burung, dan Tikus",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Budaya Minahasa",
      description: "Warisan budaya yang kaya dan tradisi yang terjaga",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/foto/sunset.jpeg"
            alt="Pantai Wawontulap"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Temukan Surga Tersembunyi</h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light">Desa Wawontulap</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Destinasi wisata pantai dengan keindahan alam yang memukau dan warisan budaya yang kaya di jantung Sulawesi
            Utara
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link href="/potensi" className="flex items-center">
                Jelajahi Potensi <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/galeri">Lihat Galeri</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{stat.subtitle}</div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Desa Wawontulap</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nama "Wawontulap" berasal dari bahasa Minahasa (Tombulu) yang memiliki makna unik mencerminkan kondisi
                geografisnya. Kata "Wawon" berarti di atas, sedangkan "Tulap" berarti lubang, yang secara harfiah
                menggambarkan keberadaan sebuah gua di pesisir pantai dengan pemukiman warga yang terletak di atasnya.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Dengan populasi 824 jiwa yang terdiri dari 257 keluarga, mayoritas penduduk merupakan masyarakat
                pendatang dari suku Bugis, Bolaang Mongondow, Gorontalo, dan Sangir-Minahasa yang masih melestarikan
                adat dan budaya tradisionalnya. Desa ini telah berkembang menjadi Desa Wisata Rintisan dengan Wawontulap
                Beach Resort sebagai tonggak penting pengembangan pariwisata.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/tentang">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pemandangan Desa Wawontulap"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Wawontulap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan pesona alam, budaya, dan potensi wisata yang menjadikan Wawontulap destinasi istimewa di Sulawesi
              Utara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Siap Menjelajahi Wawontulap?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang wisata, investasi, atau kerjasama dengan Desa Wawontulap
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
