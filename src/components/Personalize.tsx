"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Personalize() {
  return (
    <motion.section
      id="personalize"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24  lg:py-32 bg-gray-900 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Make It Yours
            </h2>
            <p className="text-xl text-gray-300">
              Personalize your ring with custom engravings. Add names, dates, or
              special messages to create a truly unique piece.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline">
                Start Personalizing
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video md:aspect-square"
          >
            <Image
              src="/placeholder.svg?height=400&width=400&text=Personalization"
              alt="Ring Personalization"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
