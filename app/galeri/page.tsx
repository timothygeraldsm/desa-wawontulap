"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, src: "/foto/pulau 1.jpeg", title: "Foto 1" },
    { id: 2, src: "/foto/pulau 2.jpeg", title: "Foto 2" },
    { id: 3, src: "/foto/mangrove.jpeg", title: "Foto 3" },
    { id: 4, src: "/foto/pesisir.jpeg", title: "Foto 4" },
    { id: 5, src: "/foto/sunset.jpeg", title: "Foto 5" },
    { id: 6, src: "/foto/pariwisata.jpeg", title: "Foto 6" },
    { id: 7, src: "/foto/gotong.jpeg", title: "Foto 7" },
    { id: 8, src: "/foto/gotong 2.jpeg", title: "Foto 8" },
    { id: 9, src: "/foto/kelapa 1.jpeg", title: "Foto 9" },
    { id: 10, src: "/foto/kelapa 2.jpeg", title: "Foto 10" },
    { id: 11, src: "/foto/kelapa 3.jpeg", title: "Foto 11" },
    { id: 12, src: "/foto/kelapa 4.jpeg", title: "Foto 12" },
    { id: 13, src: "/foto/kelapa 5.jpeg", title: "Foto 13" },
    { id: 14, src: "/foto/nilam 1", title: "Foto 14" },
    { id: 15, src: "/foto/nilam 2", title: "Foto 15" },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
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
              Jelajahi keindahan Desa Wawontulap melalui galeri foto kami.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
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
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
