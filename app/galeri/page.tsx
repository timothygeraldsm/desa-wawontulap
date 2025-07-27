"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const categories = ["Semua", "Alam", "Pantai", "Acara", "Pertanian", "Wisata"]

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      title: "Pantai Wawontulap",
      category: "Pantai",
      description: "Keindahan pantai dengan air laut yang jernih dan pasir putih",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "Wawontulap Beach Resort",
      category: "Wisata",
      description: "Resort pantai dengan fasilitas lengkap dan pemandangan menakjubkan",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "Hutan Mangrove",
      category: "Alam",
      description: "Hutan mangrove yang masih terjaga sebagai penyangga pantai",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "Perkebunan Kakao",
      category: "Pertanian",
      description: "Perkebunan kakao yang menjadi komoditas unggulan desa",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Acara Budaya Minahasa",
      category: "Acara",
      description: "Perayaan budaya tradisional Minahasa di desa",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Pulau Tatapaan",
      category: "Alam",
      description: "Pulau Tatapaan dengan terumbu karang yang indah",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Sunset di Pantai",
      category: "Pantai",
      description: "Pemandangan matahari terbenam yang memukau",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Perahu Nelayan",
      category: "Alam",
      description: "Perahu-perahu nelayan tradisional di pelabuhan",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Kebun Nilam",
      category: "Pertanian",
      description: "Tanaman nilam yang menjadi komoditas ekspor",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "Aktivitas Snorkeling",
      category: "Wisata",
      description: "Wisatawan menikmati keindahan bawah laut",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "Festival Desa",
      category: "Acara",
      description: "Perayaan festival tahunan desa dengan berbagai atraksi",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Kebun Kelapa",
      category: "Pertanian",
      description: "Perkebunan kelapa yang membentang di sepanjang pantai",
    },
  ]

  const filteredImages =
    selectedCategory === "Semua" ? images : images.filter((img) => img.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Galeri Desa Wawontulap</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Jelajahi keindahan alam, budaya, dan kehidupan sehari-hari masyarakat Desa Wawontulap melalui koleksi foto
              kami
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative">
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bagikan Momen Anda</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Punya foto atau video menarik tentang Desa Wawontulap? Bagikan dengan kami melalui WhatsApp untuk
            ditampilkan di galeri
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">Kirim via WhatsApp</Button>
        </div>
      </section>
    </div>
  )
}
