"use client"

import { useState, useEffect } from "react"
import { LodgeCard } from "@/components/(lodge)/lodge-card" 
import { FilterSidebar } from "@/components/(lodge)/filter-sidebar" 
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LodgeCardSkeleton } from "@/components/lodge-card-skeleton"

const lodges = [
  {
    id: 1,
    name: "Mountain Vista Lodge",
    location: "Aspen, Colorado",
    guests: 6,
    beds: 3,
    baths: 2,
    price: 299,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Lakefront Retreat",
    location: "Lake Tahoe, Nevada",
    guests: 8,
    beds: 4,
    baths: 3,
    price: 399,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Forest Haven Cabin",
    location: "Portland, Oregon",
    guests: 4,
    beds: 2,
    baths: 1,
    price: 199,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Forest Haven Cabin",
    location: "Portland, Oregon",
    guests: 4,
    beds: 2,
    baths: 1,
    price: 199,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Forest Haven Cabin",
    location: "Portland, Oregon",
    guests: 4,
    beds: 2,
    baths: 1,
    price: 199,
    rating: 4.7,
  },
]

export default function Page() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto sm:px-8 px-4 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <Input placeholder="Search lodges..." className="w-96" />
            <div className="flex gap-4 w-full sm:w-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} isLoading={isLoading} />
                </SheetContent>
              </Sheet>
              <div className="sm:block hidden">

              <Select defaultValue="default">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <aside className="hidden lg:block sticky top-20 h-fit">
              <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} isLoading={isLoading} />
            </aside>
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                  <>
                    <LodgeCardSkeleton />
                    <LodgeCardSkeleton />
                    <LodgeCardSkeleton />
                    <LodgeCardSkeleton />
                  </>
                ) : (
                  lodges.map((lodge) => <LodgeCard key={lodge.id} {...lodge} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
