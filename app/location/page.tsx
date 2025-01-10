"use client"

import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Location Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg bg-muted"></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partner's Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Central Park</p>
                      <p className="text-sm text-muted-foreground">Updated 5 minutes ago</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Favorite Places</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Our First Date Spot", "Favorite Restaurant", "Movie Theater"].map((place, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{place}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Navigation className="h-4 w-4" />
                      </Button>
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