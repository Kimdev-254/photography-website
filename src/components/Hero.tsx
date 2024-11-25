"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="coil.svg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Tony Photography
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Capturing moments, creating memories
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Explore Gallery
        </motion.button>
      </motion.div>
    </div>
  )
}
