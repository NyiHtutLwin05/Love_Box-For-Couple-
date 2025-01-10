"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Heart, Calendar, Smile, List, Camera, Gift, MessageSquare, BookHeart, Bell, Map, Phone, Mic, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Heart,
      href: "/",
    },
    {
      label: "Calendar",
      icon: Calendar,
      href: "/calendar",
    },
    {
      label: "Mood Tracker",
      icon: Smile,
      href: "/mood",
    },
    {
      label: "Bucket List",
      icon: List,
      href: "/bucket-list",
    },
    {
      label: "Memories",
      icon: Camera,
      href: "/memories",
    },
    {
      label: "Wishlist",
      icon: Gift,
      href: "/wishlist",
    },
    {
      label: "Love Notes",
      icon: MessageSquare,
      href: "/notes",
    },
    {
      label: "Journal",
      icon: BookHeart,
      href: "/journal",
    },
    {
      label: "Emergency",
      icon: Bell,
      href: "/emergency",
    },
    {
      label: "Location",
      icon: Map,
      href: "/location",
    },
    {
      label: "Call",
      icon: Phone,
      href: "/call",
    },
    {
      label: "Voice Memos",
      icon: Mic,
      href: "/voice",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ]

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Lovebox</h2>
          <div className="space-y-1">
            <ScrollArea className="h-[calc(100vh-10rem)] px-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}