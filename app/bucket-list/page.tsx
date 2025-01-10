"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"
import { useState } from "react"

export default function BucketListPage() {
  const [newItem, setNewItem] = useState("")
  
  const categories = [
    { name: "Travel", items: ["Visit Paris", "Road trip across USA", "See Northern Lights"] },
    { name: "Activities", items: ["Learn to dance", "Cook a fancy dinner together", "Take a pottery class"] },
    { name: "Milestones", items: ["Buy a house", "Adopt a pet", "Start a garden"] },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Dream</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter your dream..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, j) => (
                      <div key={j} className="flex items-center space-x-2">
                        <Checkbox id={`${category.name}-${j}`} />
                        <label
                          htmlFor={`${category.name}-${j}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
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