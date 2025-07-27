import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function KontakPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content:
        "Jl. Raya Wawontulap No. 123\nDesa Wawontulap, Kec. Tatapaan\nKab. Minahasa Selatan, Sulawesi Utara 95819",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 431-xxxxxx (Kantor)\n+62 812-xxxx-xxxx (WhatsApp)",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@wawontulap.id\npelayanan@wawontulap.id",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Jam Pelayanan",
      content: "Senin - Jumat: 08:00 - 15:00 WITA\nSabtu: 08:00 - 12:00 WITA\nMinggu & Hari Libur: Tutup",
      color: "text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Kami siap membantu Anda dengan informasi tentang Desa Wawontulap, pelayanan publik, atau peluang kerjasama
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-2`} />
                  <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kantor Desa Wawontulap</h2>
            <p className="text-xl text-gray-600">Informasi lengkap kantor desa dan jam pelayanan</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    Alamat Lengkap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Jl. Raya Wawontulap No. 123
                    <br />
                    Desa Wawontulap, Kec. Tatapaan
                    <br />
                    Kab. Minahasa Selatan, Sulawesi Utara 95819
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Koordinat:</strong> 1°4'38.5" LU, 124°37'17.0" BT
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    Kontak Langsung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Telepon Kantor:</p>
                      <p className="text-gray-700">+62 431-xxxxxx</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp:</p>
                      <p className="text-gray-700">+62 812-xxxx-xxxx</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p className="text-gray-700">info@wawontulap.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Jam Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Senin - Jumat</h4>
                    <p className="text-blue-800">08:00 - 15:00 WITA</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Sabtu</h4>
                    <p className="text-green-800">08:00 - 12:00 WITA</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Minggu & Hari Libur</h4>
                    <p className="text-gray-800">Tutup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lokasi Kantor Desa</h2>
            <p className="text-xl text-gray-600">Temukan lokasi kantor desa dengan mudah</p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Peta Google Maps akan ditampilkan di sini</p>
              <p className="text-gray-500 text-sm mt-2">Embed: Kantor Desa Wawontulap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pelayanan Tersedia</h2>
            <p className="text-xl text-gray-600">Berbagai layanan yang dapat Anda akses di kantor desa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-600">Pelayanan Administrasi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-700 space-y-2">
                  <li>• Pengurusan KTP</li>
                  <li>• Kartu Keluarga (KK)</li>
                  <li>• Surat Keterangan</li>
                  <li>• Dokumen Kependudukan</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-green-600">Pelayanan Pembangunan</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-700 space-y-2">
                  <li>• Konsultasi Investasi</li>
                  <li>• Perizinan Usaha</li>
                  <li>• Program Pembangunan</li>
                  <li>• Kerjasama Desa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-purple-600">Pelayanan Sosial</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-700 space-y-2">
                  <li>• Bantuan Sosial</li>
                  <li>• Program Kemasyarakatan</li>
                  <li>• Pemberdayaan Masyarakat</li>
                  <li>• Kegiatan Budaya</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Butuh Bantuan Segera?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami langsung melalui WhatsApp atau telepon untuk respon yang lebih cepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">WhatsApp Kantor Desa</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Telepon Langsung
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
