import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Briefcase, Home } from "lucide-react"

export default function TentangPage() {
  const demographics = [
    { label: "Laki-laki", value: "442", percentage: "53.64%" },
    { label: "Perempuan", value: "382", percentage: "46.36%" },
  ]

  const ageGroups = [
    { label: "0-14 tahun", value: "155", percentage: "18.81%" },
    { label: "15-64 tahun", value: "620", percentage: "75.24%" },
    { label: "65+ tahun", value: "49", percentage: "5.95%" },
  ]

  const education = [
    { label: "SD/Sederajat", value: "112", percentage: "42.5%" },
    { label: "SMP/Sederajat", value: "67", percentage: "25.48%" },
    { label: "SMA/Sederajat", value: "84", percentage: "31.94%" },
  ]

  const occupations = [
    { label: "Petani", value: "104", percentage: "47.27%" },
    { label: "Nelayan", value: "76", percentage: "34.55%" },
    { label: "Wiraswasta", value: "27", percentage: "12.27%" },
    { label: "Buruh", value: "13", percentage: "5.91%" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Tentang Desa Wawontulap</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mengenal lebih dalam sejarah, budaya, dan kehidupan masyarakat Desa Wawontulap yang kaya akan tradisi dan
              potensi
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Asal Usul Nama Wawontulap</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Nama <strong>"Wawontulap"</strong> berasal dari bahasa Minahasa (Tombulu) yang memiliki makna unik
                  mencerminkan kondisi geografisnya. Kata <strong>"Wawon"</strong> berarti "di atas", sedangkan{" "}
                  <strong>"Tulap"</strong> berarti "lubang", yang secara harfiah menggambarkan keberadaan sebuah gua di
                  pesisir pantai dengan pemukiman warga yang terletak di atasnya.
                </p>
                <p className="mb-6">
                  Desa ini juga dikenal dengan keberadaan beberapa pulau kecil di sekitarnya, seperti Pulau Tatapaan
                  yang terbentuk dari endapan lumpur akibat pasang surut air laut dan ditumbuhi oleh pohon-pohon bakau.
                  Di dekat Pulau Tatapaan terdapat pula tiga pulau lainnya, yaitu Pulau Didike, Pulau Sepatu, dan Pulau
                  Burung.
                </p>
                <p>
                  Mayoritas penduduk Desa Wawontulap merupakan masyarakat pendatang dari suku Bugis, Bolaang Mongondow,
                  Gorontalo, dan Sangir-Minahasa yang masih melestarikan adat dan budaya tradisionalnya. Kehidupan
                  sehari-hari warga desa sangat erat kaitannya dengan lingkungan sekitar, terutama laut dan pulau-pulau
                  di sekitarnya.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/foto/pesisir.jpeg"
                alt="Pemandangan udara Desa Wawontulap"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historical Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sejarah dan Budaya</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perjalanan panjang Desa Wawontulap dalam mempertahankan identitas budaya Minahasa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Warisan Budaya Minahasa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Desa Wawontulap merupakan bagian integral dari budaya Minahasa yang kaya. Masyarakat masih
                  mempertahankan tradisi seperti upacara adat, tarian tradisional, dan sistem gotong royong yang kuat.
                </p>
                <p className="text-gray-700">
                  Bahasa Minahasa masih digunakan dalam kehidupan sehari-hari, terutama oleh generasi tua, sementara
                  generasi muda mulai mempelajari kembali warisan leluhur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Perkembangan Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Seiring perkembangan zaman, Wawontulap telah mengalami modernisasi infrastruktur dengan tetap
                  mempertahankan nilai-nilai tradisional. Akses jalan, listrik, dan komunikasi terus diperbaiki.
                </p>
                <p className="text-gray-700">
                  Desa ini kini menjadi salah satu destinasi wisata yang berkembang di Minahasa Selatan, menawarkan
                  pengalaman autentik budaya lokal dan keindahan alam.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Perkembangan Sebagai Desa Wisata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Desa Wawontulap terus menunjukkan perkembangan pesat sebagai destinasi wisata yang menjanjikan. Dengan
                  status sebagai Desa Wisata Rintisan, desa ini mulai menarik perhatian melalui keindahan alamnya,
                  seperti pantai berpasir putih dan kawasan hutan mangrove yang masih asri.
                </p>
                <p className="text-gray-700">
                  Upaya untuk mengembangkan potensi pariwisata lokal semakin nyata dengan diresmikannya Wawontulap Beach
                  Resort, yang menjadi simbol awal kebangkitan sektor pariwisata dan membuka peluang ekonomi baru bagi
                  warga desa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Demografis</h2>
            <p className="text-xl text-gray-600">Profil penduduk Desa Wawontulap berdasarkan data terkini</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gender Distribution */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Distribusi Gender</CardTitle>
              </CardHeader>
              <CardContent>
                {demographics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">{item.label}</span>
                    <div className="text-right">
                      <div className="font-semibold">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Age Groups */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Home className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Kelompok Usia</CardTitle>
              </CardHeader>
              <CardContent>
                {ageGroups.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <div className="text-right">
                      <div className="font-semibold">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Tingkat Pendidikan</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Occupations */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Briefcase className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Mata Pencaharian</CardTitle>
              </CardHeader>
              <CardContent>
                {occupations.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.percentage}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
