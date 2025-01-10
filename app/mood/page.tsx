"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Meh, Frown, Heart, ThumbsUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const moodData = [
  { day: "Mon", mood: 5 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 3 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 4 },
]

export default function MoodPage() {
  const moods = [
    { icon: Smile, label: "Happy", color: "text-green-500" },
    { icon: ThumbsUp, label: "Good", color: "text-blue-500" },
    { icon: Heart, label: "Loved", color: "text-red-500" },
    { icon: Meh, label: "Okay", color: "text-yellow-500" },
    { icon: Frown, label: "Sad", color: "text-gray-500" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>How are you feeling today?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {moods.map((mood, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="flex flex-col items-center p-6"
                    >
                      <mood.icon className={`h-8 w-8 ${mood.color}`} />
                      <span className="mt-2">{mood.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mood History</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}