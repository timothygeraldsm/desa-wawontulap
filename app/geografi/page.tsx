import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Compass, Waves, Mountain } from "lucide-react"

export default function GeografiPage() {
  const islands = [
    {
      name: "Pulau Tatapaan",
      description:
        "Pulau yang terbentuk dari endapan lumpur akibat pasang surut air laut dan ditumbuhi pohon-pohon bakau",
      distance: "2.5 km",
      features: ["Hutan Mangrove", "Konservasi Alam", "Bird Watching"],
    },
    {
      name: "Pulau Sepatu",
      description: "Pulau kecil dengan bentuk unik yang menjadi spot foto favorit wisatawan",
      distance: "1.8 km",
      features: ["Fotografi", "Snorkeling", "Sunset Point"],
    },
    {
      name: "Pulau Burung",
      description: "Habitat alami berbagai jenis burung laut dan tempat konservasi",
      distance: "3.2 km",
      features: ["Bird Watching", "Konservasi", "Penelitian"],
    },
    {
      name: "Pulau Tikus",
      description: "Pulau terkecil dengan ekosistem unik dan spot diving terbaik",
      distance: "4.1 km",
      features: ["Diving", "Ekosistem Unik", "Underwater Photography"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Geografi & Lokasi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Jelajahi keindahan geografis Desa Wawontulap dan lokasi strategisnya di jantung Taman Nasional Bunaken
            </p>
          </div>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Lokasi Strategis</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Alamat Lengkap</h3>
                    <p className="text-gray-700">
                      Desa Wawontulap, Kecamatan Tatapaan, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara,
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Compass className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Koordinat</h3>
                    <p className="text-gray-700">1°4'38.5" LU, 124°37'17.0" BT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mountain className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ketinggian</h3>
                    <p className="text-gray-700">84 meter di atas permukaan laut</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Waves className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Akses</h3>
                    <p className="text-gray-700">
                      30 km dari Jalan Raya Tanawangko dengan akses jalan beraspal dan batuan. Masuk dalam area pesisir
                      Taman Nasional Bunaken bagian selatan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Peta lokasi Desa Wawontulap"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Peta Interaktif</h2>
            <p className="text-xl text-gray-600">Lokasi Desa Wawontulap dan sekitarnya</p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Peta Google Maps akan ditampilkan di sini</p>
              <p className="text-gray-500 text-sm mt-2">Embed: https://maps.google.com/wawontulap-tatapaan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Islands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pulau-Pulau Sekitar</h2>
            <p className="text-xl text-gray-600">Jelajahi keindahan pulau-pulau eksotis di sekitar Wawontulap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {islands.map((island, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">{island.name}</CardTitle>
                  <p className="text-gray-600">Jarak: {island.distance} dari pantai</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{island.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Aktivitas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {island.features.map((feature, idx) => (
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

      {/* Climate & Environment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Iklim & Lingkungan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-600">Iklim Tropis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">Suhu rata-rata 26-30°C sepanjang tahun dengan kelembaban tinggi</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Musim Hujan:</span>
                    <span className="font-semibold">Nov - Apr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Musim Kemarau:</span>
                    <span className="font-semibold">Mei - Okt</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-green-600">Ekosistem Laut</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Terumbu karang yang masih terjaga dengan keanekaragaman hayati tinggi
                </p>
                <div className="space-y-2">
                  <div>🐠 200+ spesies ikan</div>
                  <div>🪸 50+ jenis karang</div>
                  <div>🐢 Penyu hijau & sisik</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-purple-600">Hutan Mangrove</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">120 hektar hutan mangrove yang berfungsi sebagai penyangga pantai</p>
                <div className="space-y-2">
                  <div>🌿 Konservasi alam</div>
                  <div>🦅 Habitat burung</div>
                  <div>🦀 Nursery kepiting</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Batas Wilayah</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Utara</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Laut Sulawesi (wilayah TN Bunaken bagian selatan)</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Selatan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Desa Popareng</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">Timur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Perbukitan dan hutan desa</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">Barat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Laut Sulawesi/Teluk Manado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
