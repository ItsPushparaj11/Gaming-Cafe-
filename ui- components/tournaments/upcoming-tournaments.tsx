"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Users, Trophy, Clock, MapPin } from "lucide-react";
import { Button } from "@/ui- components/ui/button";

const tournaments = [
  {
    id: 1,
    title: "Valorant Champions Cup",
    game: "Valorant",
    date: "Feb 15, 2026",
    time: "2:00 PM",
    prize: "₹25,000",
    entryFee: "₹500/team",
    slots: { total: 16, filled: 12 },
    format: "5v5 Single Elimination",
    status: "registering",
    description:
      "The biggest Valorant tournament of the month! Assemble your squad and compete against the best teams in Bengaluru.",
  },
  {
    id: 2,
    title: "FIFA Pro League - Season 2",
    game: "FC 25",
    date: "Feb 22, 2026",
    time: "3:00 PM",
    prize: "₹10,000",
    entryFee: "₹200",
    slots: { total: 32, filled: 18 },
    format: "1v1 Double Elimination",
    status: "registering",
    description:
      "Show off your FIFA skills in this solo tournament. Top players from Season 1 will be defending their titles!",
  },
  {
    id: 3,
    title: "Forza Racing Championship",
    game: "Forza Motorsport",
    date: "Mar 1, 2026",
    time: "4:00 PM",
    prize: "₹8,000",
    entryFee: "₹300",
    slots: { total: 16, filled: 5 },
    format: "Time Trial + Circuit Race",
    status: "registering",
    description:
      "Experience racing on our professional simulator. Multiple race formats with points accumulation.",
  },
  {
    id: 4,
    title: "TEKKEN 8 Showdown",
    game: "TEKKEN 8",
    date: "Mar 8, 2026",
    time: "5:00 PM",
    prize: "₹12,000",
    entryFee: "₹250",
    slots: { total: 32, filled: 0 },
    format: "1v1 Double Elimination",
    status: "coming-soon",
    description:
      "The ultimate fighting game tournament. Registration opens March 1st. Get ready to fight!",
  },
];

const filters = ["All", "Registering", "Coming Soon"];

export function UpcomingTournaments() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTournaments = tournaments.filter((t) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Registering") return t.status === "registering";
    if (activeFilter === "Coming Soon") return t.status === "coming-soon";
    return true;
  });

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Upcoming Tournaments
            </h2>
            <p className="text-muted-foreground">
              Register now to secure your spot
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-secondary text-sm font-medium text-foreground rounded-full">
                        {tournament.game}
                      </span>
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          tournament.status === "registering"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {tournament.status === "registering"
                          ? "Registration Open"
                          : "Coming Soon"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {tournament.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {tournament.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {tournament.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {tournament.time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {tournament.format}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        PixelArena
                      </div>
                    </div>
                  </div>

                  {/* Prize & Registration */}
                  <div className="lg:w-64 flex flex-col gap-4 p-4 bg-card border border-border rounded-xl">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Prize Pool
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {tournament.prize}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Entry Fee</span>
                      <span className="font-medium text-foreground">
                        {tournament.entryFee}
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Slots</span>
                        <span className="font-medium text-foreground">
                          {tournament.slots.filled}/{tournament.slots.total}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{
                            width: `${(tournament.slots.filled / tournament.slots.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full ${
                        tournament.status === "registering"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-muted-foreground cursor-not-allowed"
                      }`}
                      disabled={tournament.status !== "registering"}
                    >
                      <Link href="/contact#booking">
                        {tournament.status === "registering"
                          ? "Register Now"
                          : "Coming Soon"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
