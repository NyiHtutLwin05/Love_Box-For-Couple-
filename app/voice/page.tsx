"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, Send } from "lucide-react"
import { useState } from "react"

export default function VoicePage() {
  const [isRecording, setIsRecording] = useState(false)
  
  const memos = [
    { title: "Good morning!", duration: "0:15", date: "Today, 8:00 AM" },
    { title: "Miss you", duration: "0:30", date: "Yesterday, 10:30 PM" },
    { title: "Sweet dreams", duration: "0:20", date: "Yesterday, 11:00 PM" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Record Voice Memo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  size="lg"
                  className="h-16 w-16 rounded-full"
                  onClick={() => setIsRecording(!isRecording)}
                >
                  <Mic className="h-6 w-6" />
                </Button>
                {isRecording && (
                  <Button variant="outline" className="w-24">
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {memos.map((memo, i) => (
              <Card key={i}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold">{memo.title}</h3>
                    <p className="text-sm text-muted-foreground">{memo.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{memo.duration}</span>
                    <Button variant="ghost" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
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