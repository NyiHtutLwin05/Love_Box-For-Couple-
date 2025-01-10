import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarHeart, Gift } from "lucide-react"

export default function CalendarPage() {
  const events = [
    { date: "2024-04-15", title: "Anniversary", type: "anniversary" },
    { date: "2024-04-20", title: "Movie Date", type: "date" },
    { date: "2024-04-25", title: "Partner's Birthday", type: "birthday" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        {event.type === "anniversary" ? (
                          <CalendarHeart className="h-4 w-4 text-red-500" />
                        ) : (
                          <Gift className="h-4 w-4 text-blue-500" />
                        )}
                        <span>{event.title}</span>
                      </div>
                      <Badge>{event.date}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}