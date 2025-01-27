"use client"

import { useRef, useEffect, useState } from "react"
import {
  Mountain,
  Trees,
  Wifi,
  Utensils,
  Car,
  PocketKnife,
  Snowflake,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Book,
  GraduationCap,
  Library,
  Coffee,
  Laptop,
  Backpack,
  Calculator,
  Globe,
  Microscope,
  Palette,
  Music,
  ShoppingBasketIcon as Basketball,
  Dumbbell,
  Bus,
  Bed,
} from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "./ui/button"

const categories = [
  { icon: Mountain, label: "Mountain View" },
  { icon: Trees, label: "Forest" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Car, label: "Parking" },
  { icon: PocketKnife, label: "Activities" },
  { icon: Snowflake, label: "AC" },
  { icon: Pencil, label: "Study Area" },
  { icon: Book, label: "Library" },
  { icon: GraduationCap, label: "Classes" },
  { icon: Library, label: "Bookstore" },
  { icon: Coffee, label: "Cafe" },
  { icon: Laptop, label: "Tech Lab" },
  { icon: Backpack, label: "Storage" },
  { icon: Calculator, label: "Math Center" },
  { icon: Globe, label: "Language Lab" },
  { icon: Microscope, label: "Science Lab" },
  { icon: Palette, label: "Art Studio" },
  { icon: Music, label: "Music Room" },
  { icon: Basketball, label: "Gym" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Bus, label: "Shuttle" },
  { icon: Bed, label: "Dorms" },
]

export function CategorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(scrollContainerRef)
  // Remove this line
  //const [currentX, setCurrentX] = useState(0)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const startScrolling = () => {
      controls.start({
        x: [-1920, 0],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      })
    }

    if (inView) {
      startScrolling()
    } else {
      controls.stop()
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
      controls.stop()
    }
  }, [controls, inView])

  const handleMouseEnter = () => {
    controls.stop()
  }

  const handleMouseLeave = () => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    })
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-8 sm:py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold">Popular Amenities</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="w-8 h-8 sm:w-10 sm:h-10" onClick={() => scroll("left")}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 sm:w-10 sm:h-10" onClick={() => scroll("right")}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
        <div className="relative overflow-hidden" ref={scrollContainerRef}>
          <motion.div
            className="flex"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...categories, ...categories].map((category, index) => (
              <motion.div key={index} className="flex-shrink-0 w-[80px] sm:w-[100px] mr-3 sm:mr-4">
                <div className="flex flex-col items-center justify-center h-full">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium text-center">{category.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

