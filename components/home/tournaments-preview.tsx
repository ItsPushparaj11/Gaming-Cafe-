import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ArrowRight } from "lucide-react";

const upcomingTournaments = [
  {
    title: "Valorant Champions Cup",
    date: "Feb 15, 2026",
    prize: "₹25,000",
    slots: "16 Teams",
    game: "Valorant",
    status: "Registering",
  },
  {
    title: "FIFA Pro League",
    date: "Feb 22, 2026",
    prize: "₹10,000",
    slots: "32 Players",
    game: "FC 25",
    status: "Registering",
  },
  {
    title: "Forza Racing Cup",
    date: "Mar 1, 2026",
    prize: "₹8,000",
    slots: "16 Racers",
    game: "Forza Horizon",
    status: "Coming Soon",
  },
];

export function TournamentsPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Tournaments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Compete & Win
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Join our weekly and monthly esports tournaments. Compete against
              the best local talent, win cash prizes, and build your gaming
              legacy.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">₹5L+</p>
                  <p className="text-sm text-muted-foreground">
                    Total Prize Pool
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Participants</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/tournaments">
                View All Tournaments
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Tournament Cards */}
          <div className="space-y-4">
            {upcomingTournaments.map((tournament) => (
              <div
                key={tournament.title}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-secondary text-xs font-medium text-muted-foreground rounded">
                        {tournament.game}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded ${
                          tournament.status === "Registering"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {tournament.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tournament.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {tournament.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {tournament.slots}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Prize Pool</p>
                    <p className="text-xl font-bold text-primary">
                      {tournament.prize}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
