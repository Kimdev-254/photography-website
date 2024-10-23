// app/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl font-bold mb-6 font-playfair">
          Capturing Moments, Creating Memories
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Welcome to Pro Photography, where we transform fleeting moments into
          timeless art.
        </p>
        <motion.a
          href="/gallery"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Explore Our Gallery
        </motion.a>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20"
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/placeholder-${i}.jpg`}
              alt={`Featured image ${i}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </motion.section>
    </div>
  )
}
