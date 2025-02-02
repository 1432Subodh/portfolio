"use client"

import { Star, Users, Bed, Bath, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import Link from "next/link"

interface LodgeCardProps {
  name: string
  location: string
  guests: number
  beds: number
  baths: number
  price: number
  rating: number
}

export function LodgeCard({ name, location, guests, beds, baths, price, rating }: LodgeCardProps) {


  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative">
          <Image src="/placeholder.svg" alt={name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-primary mr-1" />
              <span>{rating}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{location}</p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{guests}</span>
            </div>
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{beds}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{baths}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">${price}</span>
              <span className="text-muted-foreground ml-1">/night</span>
            </div>
            <Link href={'/lodge/view/12'}>
            <Button variant={'outline'}>View More
            <ArrowRight className="ml-2 h-4 w-4" />

            </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LodgeCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="aspect-[4/3] w-full" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-6 w-[50px]" />
          </div>
          <Skeleton className="h-4 w-[200px] mb-4" />
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-[40px]" />
              <Skeleton className="h-4 w-[40px]" />
              <Skeleton className="h-4 w-[40px]" />
            </div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
          <div className="mt-4">
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

