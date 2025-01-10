"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Heart, DollarSign } from "lucide-react"
import { useState } from "react"

export default function WishlistPage() {
  const [newItem, setNewItem] = useState("")
  
  const wishes = [
    { title: "Apple Watch", price: "$399", priority: "High", link: "https://apple.com" },
    { title: "Weekend Getaway", price: "$500", priority: "Medium", link: "#" },
    { title: "Cooking Class", price: "$150", priority: "Low", link: "#" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add to Wishlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="What do you wish for?"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <Button>
                  <Gift className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishes.map((wish, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{wish.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {wish.price}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}