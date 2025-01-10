import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function MemoriesPage() {
  const memories = [
    { id: 1, date: "April 15, 2024", location: "Paris", image: "https://source.unsplash.com/random/800x600?paris" },
    { id: 2, date: "April 10, 2024", location: "Beach", image: "https://source.unsplash.com/random/800x600?beach" },
    { id: 3, date: "April 5, 2024", location: "Restaurant", image: "https://source.unsplash.com/random/800x600?restaurant" },
    { id: 4, date: "April 1, 2024", location: "Park", image: "https://source.unsplash.com/random/800x600?park" },
    { id: 5, date: "March 28, 2024", location: "Concert", image: "https://source.unsplash.com/random/800x600?concert" },
    { id: 6, date: "March 25, 2024", location: "Home", image: "https://source.unsplash.com/random/800x600?home" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload New Memory</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Photos
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memories.map((memory) => (
              <Card key={memory.id} className="overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.location}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-semibold">{memory.location}</p>
                  <p className="text-sm text-muted-foreground">{memory.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}