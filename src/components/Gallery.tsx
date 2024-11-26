"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const categories = ["All", "Landscape", "Portrait", "Wildlife", "Urban"]

const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=400",
    category: "Landscape",
  },
  { id: 2, src: "/placeholder.svg?height=400&width=400", category: "Portrait" },
  { id: 3, src: "/placeholder.svg?height=400&width=400", category: "Wildlife" },
  { id: 4, src: "/placeholder.svg?height=400&width=400", category: "Urban" },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=400",
    category: "Landscape",
  },
  { id: 6, src: "/placeholder.svg?height=400&width=400", category: "Portrait" },
  { id: 7, src: "/placeholder.svg?height=400&width=400", category: "Wildlife" },
  { id: 8, src: "/placeholder.svg?height=400&width=400", category: "Urban" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-serif font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h2>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
