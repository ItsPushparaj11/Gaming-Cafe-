import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram } from "lucide-react";

export function GalleryCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Pictures Don&apos;t Do It Justice
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Come visit us in person to experience the full PixelArena atmosphere.
          The RGB lights, the sound of mechanical keyboards, and the energy of
          fellow gamers await you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
          >
            <a
              href="https://instagram.com/pixelarena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
