"use client";

import { useState } from "react";
import { Monitor, Search } from "lucide-react";
import { Input } from "@/ui- components/ui/input";

const pcGames = [
  {
    title: "Valorant",
    genre: "Tactical Shooter",
    players: "5v5",
    popular: true,
  },
  {
    title: "Counter-Strike 2",
    genre: "Tactical Shooter",
    players: "5v5",
    popular: true,
  },
  {
    title: "Apex Legends",
    genre: "Battle Royale",
    players: "3-Player Squads",
    popular: true,
  },
  { title: "Fortnite", genre: "Battle Royale", players: "Solo/Duo/Squad" },
  { title: "PUBG", genre: "Battle Royale", players: "Solo/Duo/Squad" },
  { title: "League of Legends", genre: "MOBA", players: "5v5", popular: true },
  { title: "Dota 2", genre: "MOBA", players: "5v5" },
  { title: "Overwatch 2", genre: "Hero Shooter", players: "5v5" },
  { title: "Call of Duty: Warzone", genre: "Battle Royale", players: "Squad" },
  { title: "Minecraft", genre: "Sandbox", players: "Multiplayer" },
  { title: "GTA V Online", genre: "Action", players: "Multiplayer" },
  { title: "Rocket League", genre: "Sports", players: "1v1 to 4v4" },
  { title: "FIFA 25", genre: "Sports", players: "1v1" },
  { title: "Elden Ring", genre: "Action RPG", players: "Single/Co-op" },
  { title: "Cyberpunk 2077", genre: "Action RPG", players: "Single Player" },
  { title: "The Finals", genre: "Shooter", players: "3v3v3" },
  { title: "TEKKEN 8", genre: "Fighting", players: "1v1" },
  { title: "Street Fighter 6", genre: "Fighting", players: "1v1" },
];

export function PCGames() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = pcGames.filter(
    (game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="pc" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                PC Games
              </h2>
            </div>
            <p className="text-muted-foreground">
              High-performance gaming on RTX 4070 rigs with 240Hz monitors
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.title}
              className="group relative bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
            >
              {game.popular && (
                <div className="absolute -top-2 -right-2">
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Hot
                  </span>
                </div>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                {game.title}
              </h3>
              <p className="text-xs text-muted-foreground">{game.genre}</p>
              <p className="text-xs text-primary mt-1">{game.players}</p>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No games found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
