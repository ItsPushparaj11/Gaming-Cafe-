import Link from "next/link";
import { Car, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const racingGames = [
  { title: "Assetto Corsa Competizione", type: "Simulation" },
  { title: "Forza Horizon 5", type: "Arcade" },
  { title: "Forza Motorsport", type: "Simulation" },
  { title: "Gran Turismo 7", type: "Simulation" },
  { title: "F1 24", type: "Simulation" },
  { title: "Dirt Rally 2.0", type: "Rally" },
  { title: "iRacing", type: "Simulation" },
  { title: "Project CARS 3", type: "Simulation" },
];

const simFeatures = [
  "Logitech G923 Racing Wheel",
  "Force Feedback Pedals",
  "6-Speed Shifter",
  "Racing Bucket Seat",
  "Triple 27\" Monitors",
  "Adjustable Cockpit Position",
];

export function RacingGames() {
  return (
    <section id="racing" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-600/10 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Racing Simulator
            </h2>
          </div>
          <p className="text-muted-foreground">
            Professional-grade racing experience with force feedback and triple
            monitors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Simulator Setup */}
          <div className="bg-background border border-border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Simulator Setup
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience realistic racing with our professional-grade simulator.
              Feel every turn, bump, and acceleration through our force feedback
              system.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {simFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
              <div>
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-2xl font-bold text-foreground">
                  ₹150
                  <span className="text-sm font-normal text-muted-foreground">
                    /30 min
                  </span>
                </p>
              </div>
              <Button
                asChild
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href="/contact#booking">Book Session</Link>
              </Button>
            </div>
          </div>

          {/* Available Games */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Available Racing Titles
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {racingGames.map((game) => (
                <div
                  key={game.title}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-xl hover:border-emerald-500/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm truncate">
                      {game.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{game.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
