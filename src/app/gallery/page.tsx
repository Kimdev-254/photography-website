// app/gallery/page.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// This would typically come from an API
const categories = ["All", "Nature", "Portrait", "Architecture", "Events"]
const images = [
  { id: 1, src: "/placeholder-1.jpg", category: "Nature" },
  { id: 2, src: "/placeholder-2.jpg", category: "Portrait" },
  { id: 3, src: "/placeholder-3.jpg", category: "Architecture" },
  // Add more images here
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center font-playfair">
        Our Gallery
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
