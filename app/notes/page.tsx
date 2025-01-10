"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Send } from "lucide-react"
import { useState } from "react"

export default function NotesPage() {
  const [newNote, setNewNote] = useState("")
  
  const notes = [
    { content: "Missing you today! Can't wait to see you tonight ❤️", date: "2 hours ago", sender: "Partner" },
    { content: "Thank you for being so supportive yesterday!", date: "1 day ago", sender: "You" },
    { content: "Just thinking about how lucky I am to have you", date: "2 days ago", sender: "Partner" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Write a Love Note</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Write something sweet..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Note
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {notes.map((note, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{note.sender}</p>
                      <p className="text-sm text-muted-foreground">{note.date}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-4">{note.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}