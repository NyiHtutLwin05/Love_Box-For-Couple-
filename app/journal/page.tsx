"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { BookHeart, Plus } from "lucide-react"
import { useState } from "react"

export default function JournalPage() {
  const [title, setTitle] = useState("")
  const [entry, setEntry] = useState("")
  
  const entries = [
    { title: "Our First Date", date: "April 15, 2024", preview: "Today was magical..." },
    { title: "Weekend Getaway", date: "April 10, 2024", preview: "Surprised my love with..." },
    { title: "Cooking Adventure", date: "April 5, 2024", preview: "Attempted to make pasta..." },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>New Journal Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Entry title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Write your thoughts..."
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Save Entry
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{entry.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{entry.date}</p>
                    </div>
                    <BookHeart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-4 text-sm">{entry.preview}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}