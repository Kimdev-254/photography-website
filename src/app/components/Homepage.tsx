'use client'

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, RotateCcw, Package, Clock } from "lucide-react"

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth"
  })
}

const MotionLink = motion(Link)
const MotionImage = motion(Image)

export default function Homepage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="flex flex-col min-h-screen">
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
            <MotionImage
              src="/placeholder.svg?height=32&width=32"
              alt="NewmanBands Logo"
              width={32}
              height={32}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
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
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white"
        >
          <motion.div style={{ opacity }} className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crafted for Life's Moments
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our collection of premium men's rings for every occasion
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <Button className="w-full" size="lg">
                  Shop Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="container mt-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <MotionImage
                    src={`/placeholder.svg?height=300&width=300&text=Ring+${i}`}
                    alt={`Featured Ring ${i}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="shop"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Shop by Color
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {["Black", "Gold", "Silver", "Rose Gold"].map((color) => (
                <motion.div
                  key={color}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="#" className="group">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
                      <MotionImage
                        src={`/placeholder.svg?height=300&width=300&text=${color}+Ring`}
                        alt={`${color} Ring`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-4 text-lg font-semibold text-center"
                    >
                      {color}
                    </motion.h3>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Top Rated
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <MotionImage
                        src={`/placeholder.svg?height=300&width=300&text=Top+Rated+${i}`}
                        alt={`Top Rated Ring ${i}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-semibold mb-2"
                      >
                        Classic Band {i}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center"
                      >
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(120)</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-2 font-bold"
                      >
                        $199.99
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="personalize"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make It Yours</h2>
                <p className="text-xl text-gray-300">
                  Personalize your ring with custom engravings. Add names, dates, or special messages to create a truly
                  unique piece.
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
                <MotionImage
                  src="/placeholder.svg?height=400&width=400&text=Personalization"
                  alt="Ring Personalization"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0  }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              I apologize for the persistent error. Let's carefully review and revise the code to address this issue.

<Thinking>

Referencing my internal reminder:
1. I need to ensure all hooks are used correctly and at the top level of the component.
2. I should check for any conditional rendering that might be causing issues with hooks.
3. I must provide a complete, error-free code solution.
4. I should consider using QuickEdit for small changes, but given the nature of this error, a full code review might be necessary.

</Thinking>

After careful consideration, I believe the issue might be related to how we're using the `layout` prop with the `MotionImage` component. Let's revise the code to address this and other potential issues. I'll provide a complete, updated version of the component:

```tsx project="NewmanBands Enhanced Homepage" file="enhanced-homepage.tsx" type="react"
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, RotateCcw, Package, Clock } from "lucide-react"

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth"
  })
}

const MotionLink = motion(Link)
const MotionImage = motion(Image)

export default function Homepage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="flex flex-col min-h-screen">
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
            <MotionImage
              src="/placeholder.svg?height=32&width=32"
              alt="NewmanBands Logo"
              width={32}
              height={32}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
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
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white"
        >
          <motion.div style={{ opacity }} className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crafted for Life's Moments
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our collection of premium men's rings for every occasion
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <Button className="w-full" size="lg">
                  Shop Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="container mt-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Ring+${i}`}
                    alt={`Featured Ring ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="shop"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Shop by Color
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {["Black", "Gold", "Silver", "Rose Gold"].map((color) => (
                <motion.div
                  key={color}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="#" className="group">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=${color}+Ring`}
                        alt={`${color} Ring`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-4 text-lg font-semibold text-center"
                    >
                      {color}
                    </motion.h3>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Top Rated
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Top+Rated+${i}`}
                        alt={`Top Rated Ring ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-semibold mb-2"
                      >
                        Classic Band {i}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center"
                      >
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(120)</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-2 font-bold"
                      >
                        $199.99
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          id="personalize"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make It Yours</h2>
                <p className="text-xl text-gray-300">
                  Personalize your ring with custom engravings. Add names, dates, or special messages to create a truly
                  unique piece.
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
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0  }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
            >
              Why Choose NewmanBands
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2  md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { icon: Truck, title: "Free Delivery", description: "On all orders over $100" },
                { icon: RotateCcw, title: "Free Returns", description: "30-day money-back guarantee" },
                { icon: Package, title: "Every Ring in Stock", description: "Ready to ship immediately" },
                { icon: Clock, title: "Fast Delivery", description: "Get your order in 2-3 business days" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <item.icon className="w-12 h-12 mb-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-center"
              >
                What Our Customers Say
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center mb-4"
                        >
                          {[...Array(5)].map((_, index) => (
                            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </motion.div>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-sm text-gray-600 mb-4"
                        >
                          "Absolutely love my NewmanBand! The quality is outstanding, and the personalization makes it
                          truly special."
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="flex items-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                          <div>
                            <p className="font-semibold">John D.</p>
                            <p className="text-sm text-gray-600">Verified Buyer</p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full py-6 bg-gray-100"
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Shop", items: ["All Rings", "Wedding Bands", "Engagement Rings", "Fashion Rings"] },
              { title: "About", items: ["Our Story", "Craftsmanship", "Materials", "Blog"] },
              { title: "Customer Service", items: ["Contact Us", "FAQs", "Shipping & Returns", "Size Guide"] },
              { title: "Connect", items: ["Instagram", "Facebook", "Twitter", "Pinterest"] },
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
    </div>
  )
}