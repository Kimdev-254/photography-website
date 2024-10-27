"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const MotionLink = motion(Link)

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth",
  })
}

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <MotionLink
          href="/"
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="NewmanBands Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">NewmanBands</span>
        </MotionLink>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Shop", "Personalize", "About", "Contact"].map((item) => (
            <MotionLink
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={smoothScroll}
              className="text-sm font-medium hover:underline underline-offset-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </MotionLink>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
