"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 bg-gray-100"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Shop",
              items: [
                "All Rings",
                "Wedding Bands",
                "Engagement Rings",
                "Fashion Rings",
              ],
            },
            {
              title: "About",
              items: ["Our Story", "Craftsmanship", "Materials", "Blog"],
            },
            {
              title: "Customer Service",
              items: ["Contact Us", "FAQs", "Shipping & Returns", "Size Guide"],
            },
            {
              title: "Connect",
              items: ["Instagram", "Facebook", "Twitter", "Pinterest"],
            },
          ].map((section, index) => (
            <div key={index}>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-semibold mb-4"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 border-t pt-6"
        >
          <p className="text-center text-sm text-gray-600">
            © 2024 NewmanBands. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
