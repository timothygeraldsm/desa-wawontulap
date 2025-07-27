import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Phone, Mail, MapPin } from "lucide-react"

export default function PemerintahanPage() {
  const officials = [
    {
      name: "Bapak Drs. Robert Mandagi",
      position: "Kepala Desa",
      period: "2019-2025",
      phone: "+62 812-xxxx-xxxx",
      email: "kades@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ibu Maria Tumewu, S.Pd",
      position: "Sekretaris Desa",
      period: "2020-2026",
      phone: "+62 813-xxxx-xxxx",
      email: "sekdes@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bapak Ir. James Kalangi",
      position: "Kepala Urusan Pembangunan",
      period: "2020-2026",
      phone: "+62 814-xxxx-xxxx",
      email: "pembangunan@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ibu Serly Runtuwene, S.E",
      position: "Kepala Urusan Keuangan",
      period: "2019-2025",
      phone: "+62 815-xxxx-xxxx",
      email: "keuangan@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bapak David Lengkong",
      position: "Kepala Urusan Umum",
      period: "2020-2026",
      phone: "+62 816-xxxx-xxxx",
      email: "umum@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bapak Ronny Waworuntu",
      position: "Kepala Dusun I",
      period: "2019-2025",
      phone: "+62 817-xxxx-xxxx",
      email: "dusun1@wawontulap.id",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const services = [
    {
      title: "Pelayanan Administrasi",
      description: "Pengurusan KTP, KK, Surat Keterangan, dan dokumen lainnya",
      hours: "Senin - Jumat: 08:00 - 15:00",
    },
    {
      title: "Pelayanan Pembangunan",
      description: "Konsultasi dan perizinan terkait pembangunan dan investasi",
      hours: "Senin - Jumat: 08:00 - 15:00",
    },
    {
      title: "Pelayanan Sosial",
      description: "Bantuan sosial, program kemasyarakatan, dan pemberdayaan",
      hours: "Senin - Jumat: 08:00 - 15:00",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Pemerintahan Desa</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mengenal struktur pemerintahan dan pelayanan publik yang tersedia di Desa Wawontulap
            </p>
          </div>
        </div>
      </section>

      {/* Village Government Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Struktur Pemerintah Desa</h2>
            <p className="text-xl text-gray-600">Susunan lengkap perangkat pemerintahan Desa Wawontulap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plt. Hukum Tua */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Plt. Hukum Tua</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">BEACTRIES RATU S. SOS</p>
                <p className="text-sm text-gray-600">NIP: 196908152009062001</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Sekretaris Desa */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Sekretaris Desa</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">JUNA TAMARAW</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Seksi Pemerintahan */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Seksi Pemerintahan</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">SUHARDI TO'O</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Seksi Kesejahteraan */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Seksi Kesejahteraan</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">TITIN KABOYO</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Seksi Pelayanan */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Seksi Pelayanan</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">ALIMURTOPO HASAN</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Urusan Perencanaan */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Urusan Perencanaan</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">TRISYE ADIPATI</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Urusan Keuangan */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Urusan Keuangan</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">RISANTI DAENGRIBOKO</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Urusan Tata Usaha dan Umum */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Urusan Tata Usaha dan Umum</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">RISANTI DAENGRIBOKO</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Jaga I */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Jaga I</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">SOFIAN DORUS</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Jaga II */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Jaga II</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">AZAN LAKORO</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Jaga III */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Jaga III</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">SUWITO LABULA</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Jaga IV */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Jaga IV</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">DEVI MAKALUAS</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>

            {/* Kepala Jaga V */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Kepala Jaga V</h3>
                <p className="text-gray-900 font-medium uppercase tracking-wide">RIFAL DAENGMALANYE</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Aktif
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pelayanan Publik</h2>
            <p className="text-xl text-gray-600">Berbagai layanan yang tersedia untuk masyarakat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="text-center">
                  <User className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <p className="text-sm text-blue-600 font-semibold">{service.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Kantor Desa Wawontulap</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Alamat</h3>
                    <p className="text-gray-700">
                      Jl. Raya Wawontulap No. 123
                      <br />
                      Desa Wawontulap, Kec. Tatapaan
                      <br />
                      Kab. Minahasa Selatan, Sulawesi Utara 95819
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Telepon</h3>
                    <p className="text-gray-700">
                      +62 431-xxxxxx (Kantor)
                      <br />
                      +62 812-xxxx-xxxx (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">
                      info@wawontulap.id
                      <br />
                      pelayanan@wawontulap.id
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Jam Pelayanan</h3>
                <div className="space-y-1 text-blue-800">
                  <p>Senin - Jumat: 08:00 - 15:00 WITA</p>
                  <p>Sabtu: 08:00 - 12:00 WITA</p>
                  <p>Minggu & Hari Libur: Tutup</p>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%', height: 0 }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55077.6632986094!2d124.53264042680658!3d1.3116446524900747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876191af6c5195%3A0x8e119c1ef606cd0f!2sWawontulap%2C%20Tatapaan%2C%20South%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1753627381832!5m2!1sen!2sid"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Lokasi Kantor Desa Wawontulap"
    style={{
      border: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  ></iframe>
</div>

          </div>
        </div>
      </section>
    </div>
  )
}
