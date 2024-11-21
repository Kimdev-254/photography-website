"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-gray-900 dark:text-white transition-colors duration-300"
            >
              Tony Photography
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <div className="md:hidden ml-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
