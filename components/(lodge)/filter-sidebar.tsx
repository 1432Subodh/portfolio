"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Skeleton } from "@/components/ui/skeleton"

interface FilterSidebarProps {
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  isLoading?: boolean
}

export function FilterSidebar({ priceRange, setPriceRange, isLoading = false }: FilterSidebarProps) {
  if (isLoading) {
    return <FilterSidebarSkeleton />
  }

  const categories = [
    { name: "All Product", count: 25 },
    { name: "Furniture", count: 25 },
    { name: "Bags", count: 25 },
    { name: "Shoes", count: 25 },
    { name: "Decoration", count: 25 },
  ]

  const sizes = ["S", "M", "L", "XL", "XXL"]
  const colors = [
    "bg-pink-200",
    "bg-orange-500",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-pink-300",
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex justify-between items-center">
              <span>{category.name}</span>
              <span className="text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider defaultValue={priceRange} max={200} step={1} onValueChange={setPriceRange} className="mt-2" />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Button key={size} variant="outline" size="sm">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <Button key={color} variant="outline" size="icon" className="rounded-full p-0 w-6 h-6">
              <div className={`w-4 h-4 rounded-full ${color}`} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function FilterSidebarSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-6 w-[100px] mb-4" />
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[30px]" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Skeleton className="h-6 w-[100px] mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-[40px]" />
          <Skeleton className="h-4 w-[40px]" />
        </div>
      </div>

      <div>
        <Skeleton className="h-6 w-[100px] mb-4" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-8 w-[40px]" />
          ))}
        </div>
      </div>

      <div>
        <Skeleton className="h-6 w-[100px] mb-4" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Skeleton key={i} className="h-6 w-6 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

