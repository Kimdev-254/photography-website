// app/layout.tsx
"use client"

import { ThemeProvider } from "next-themes"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Professional Photography</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider attribute="class">
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold font-playfair">
                Pro Photography
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/gallery"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Contact
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main className="pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2023 Pro Photography. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
