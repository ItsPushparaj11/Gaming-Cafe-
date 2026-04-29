"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Gamepad2,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Monitor,
  Trophy,
  Settings,
  BarChart3,
  Loader2,
  ShieldAlert,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Sessions",
    value: "42",
    change: "+8 today",
    trend: "up",
    icon: Monitor,
  },
  {
    title: "Revenue (MTD)",
    value: "₹4,52,800",
    change: "+23.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Bookings Today",
    value: "67",
    change: "+5 pending",
    trend: "neutral",
    icon: Calendar,
  },
];

const recentBookings = [
  { id: 1, user: "Rahul Sharma", zone: "PC Gaming", duration: "3 hours", status: "active", time: "2:30 PM" },
  { id: 2, user: "Priya Patel", zone: "PS5 Room", duration: "2 hours", status: "upcoming", time: "4:00 PM" },
  { id: 3, user: "Amit Kumar", zone: "Racing Sim", duration: "1 hour", status: "completed", time: "1:00 PM" },
  { id: 4, user: "Sneha Reddy", zone: "VR Zone", duration: "1.5 hours", status: "active", time: "3:15 PM" },
  { id: 5, user: "Vikram Singh", zone: "PC Gaming", duration: "4 hours", status: "upcoming", time: "5:00 PM" },
];

const quickActions = [
  { label: "Manage Users", icon: Users, href: "#" },
  { label: "View Reports", icon: BarChart3, href: "#" },
  { label: "Tournaments", icon: Trophy, href: "/tournaments" },
  { label: "Settings", icon: Settings, href: "#" },
];

export default function AdminPage() {
  const router = useRouter();
  const { user, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    );
  }

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <ShieldAlert className="w-10 h-10 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-8">
              You don&apos;t have permission to access the admin dashboard. Please contact an administrator if you believe this is an error.
            </p>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <Badge className="bg-primary/10 text-primary border-primary/20">Admin</Badge>
            </div>
            <p className="text-muted-foreground">
              Welcome back, {user.name}. Here&apos;s what&apos;s happening at PixelArena today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp className={`w-4 h-4 ${stat.trend === "up" ? "text-green-500" : "text-muted-foreground"}`} />
                        <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-muted-foreground"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Bookings */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Recent Bookings
                  </CardTitle>
                  <CardDescription>Latest booking activity across all zones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Gamepad2 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{booking.user}</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.zone} - {booking.duration}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              booking.status === "active"
                                ? "default"
                                : booking.status === "upcoming"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              booking.status === "active"
                                ? "bg-green-500/10 text-green-500 border-green-500/20"
                                : booking.status === "upcoming"
                                ? "bg-primary/10 text-primary border-primary/20"
                                : ""
                            }
                          >
                            {booking.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center justify-end gap-1">
                            <Clock className="w-3 h-3" />
                            {booking.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Bookings
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Zone Status */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                      <Link
                        key={action.label}
                        href={action.href}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all"
                      >
                        <action.icon className="w-6 h-6 text-primary" />
                        <span className="text-sm text-foreground">{action.label}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Zone Status */}
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-primary" />
                    Zone Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "PC Gaming Zone", active: 18, total: 24 },
                      { name: "PS5 Rooms", active: 4, total: 6 },
                      { name: "Racing Simulators", active: 2, total: 4 },
                      { name: "VR Zone", active: 3, total: 4 },
                    ].map((zone) => (
                      <div key={zone.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{zone.name}</span>
                          <span className="text-muted-foreground">
                            {zone.active}/{zone.total} active
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${(zone.active / zone.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
