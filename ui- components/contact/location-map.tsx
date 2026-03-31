import { MapPin, Navigation, Bus, Car } from "lucide-react";

const directions = [
  {
    icon: Bus,
    title: "By Metro",
    description:
      "Get off at Indiranagar Metro Station. Take an auto/cab to Koramangala 5th Block (10 mins).",
  },
  {
    icon: Car,
    title: "By Car",
    description:
      "Free parking available. Enter through the main gate and park in the basement.",
  },
  {
    icon: Navigation,
    title: "Landmarks",
    description:
      "Near Forum Mall, opposite National Games Village. Look for the neon PixelArena sign.",
  },
];

export function LocationMap() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Find Us
          </h2>
          <p className="text-muted-foreground">
            Located in the heart of Koramangala, easily accessible from anywhere
            in Bengaluru
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Embed */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/9] lg:aspect-[16/10] bg-background border border-border rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5897849180116!2d77.61099!3d12.935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjAiTiA3N8KwMzYnMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="PixelArena Location Map"
              />
              {/* Fallback for when map doesn't load */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary">
                <MapPin className="w-16 h-16 text-primary mb-4" />
                <p className="text-foreground font-medium">
                  Koramangala 5th Block
                </p>
                <p className="text-muted-foreground text-sm">Bengaluru</p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="space-y-4">
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123, 5th Block, Koramangala
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Koramangala+5th+Block+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>

            {directions.map((direction) => (
              <div
                key={direction.title}
                className="bg-background border border-border rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <direction.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {direction.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {direction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
