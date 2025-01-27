"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import { useState } from "react";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-4">
      <div className="relative w-full h-[550px] sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {!imageLoaded && <Skeleton className="absolute inset-0 h-full w-full" />}
          <Image
            src="/image.jpg"
            alt="Luxury lodge interior"
            fill
            className={`object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/10" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-5"
          >
            Find Your Perfect
            <br />
            Mountain Retreat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 text-muted-foreground"
          >
            Discover cozy lodges and luxury cabins across stunning locations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-md flex gap-2"
          >
            <Input type="search" placeholder="Search locations, amenities..." className="flex-1" />
            <Button size="default" className="px-4 py-0.5">
              Search
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
