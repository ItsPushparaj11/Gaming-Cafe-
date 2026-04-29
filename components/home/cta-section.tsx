import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Start Gaming?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Walk in anytime or book your session online. First-time visitors get
            30 minutes free on PC gaming!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8"
            >
              <Link href="/contact#booking">Book Online</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8 bg-transparent"
            >
              <Link href="/contact">Walk-in Info</Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-6 p-6 bg-background/50 border border-border rounded-2xl backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-sm text-muted-foreground text-center">
                Koramangala 5th Block, Bengaluru
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground text-center">
                10 AM - 12 AM, All Days
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Contact</p>
              <p className="text-sm text-muted-foreground text-center">
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
