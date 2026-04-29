import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export function TournamentCTA() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Want to Host a Private Tournament?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Planning a corporate event, college competition, or private gaming
          party? We offer custom tournament packages with dedicated gaming
          stations, live streaming, and professional commentary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
          >
            <Link href="/contact#booking">
              <Calendar className="w-4 h-4 mr-2" />
              Book Venue
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
          <div className="p-4 bg-background border border-border rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">
              Custom Formats
            </h3>
            <p className="text-sm text-muted-foreground">
              Single elimination, double elimination, round robin, or custom
              formats tailored to your event.
            </p>
          </div>
          <div className="p-4 bg-background border border-border rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">
              Live Streaming
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional streaming setup with commentary for online audiences
              and social media.
            </p>
          </div>
          <div className="p-4 bg-background border border-border rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">
              Catering Available
            </h3>
            <p className="text-sm text-muted-foreground">
              Food and beverage packages available for extended tournaments and
              events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
