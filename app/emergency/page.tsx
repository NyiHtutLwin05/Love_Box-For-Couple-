import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, MapPin, Bell } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:block" />
        <main className="flex-1 p-8">
          <Card className="mb-8 border-red-200 bg-red-50 dark:bg-red-900/10">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Services
              </CardTitle>
              <CardDescription>
                Use these buttons in case of emergency. Your partner will be immediately notified.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" size="lg" className="w-full">
                <Bell className="mr-2 h-5 w-5" />
                Send Emergency Alert
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Partner
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Emergency Services
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Share Current Location
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Navigate to Partner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}