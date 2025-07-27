import Link from "next/link"
import { Waves, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Desa Wawontulap</span>
            </div>
            <p className="text-gray-300 mb-4">
              Surga tersembunyi di Sulawesi Utara dengan keindahan pantai, budaya yang kaya, dan potensi wisata yang
              menakjubkan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-white">
                  Tentang Desa
                </Link>
              </li>
              <li>
                <Link href="/potensi" className="text-gray-300 hover:text-white">
                  Potensi Desa
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Kec. Tatapaan, Kab. Minahasa Selatan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+62 xxx-xxxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@wawontulap.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-1">
  <p className="text-gray-400 text-sm font-medium">
    KKT 143 UNSRAT POSKO WAWONTULAP
  </p>
  <p className="text-gray-400 text-sm">
    © {new Date().getFullYear()} Desa Wawontulap. Seluruh hak cipta dilindungi.
  </p>
</div>
      </div>
    </footer>
  )
}
