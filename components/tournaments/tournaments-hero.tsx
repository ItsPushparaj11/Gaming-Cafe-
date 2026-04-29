import { Trophy, Users, Calendar, Medal } from "lucide-react";

const stats = [
  { icon: Trophy, value: "₹5L+", label: "Total Prize Pool" },
  { icon: Users, value: "500+", label: "Participants" },
  { icon: Calendar, value: "24+", label: "Events Hosted" },
  { icon: Medal, value: "50+", label: "Champions" },
];

export function TournamentsHero() {
  return (
    <section className="pt-24 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Esports Events
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Tournaments & Competitions
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Compete against the best local talent, win cash prizes, and build
            your gaming legacy. Weekly and monthly events for all skill levels.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 bg-card border border-border rounded-xl"
            >
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
