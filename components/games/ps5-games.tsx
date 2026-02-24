import { Gamepad } from "lucide-react";

const ps5Games = [
  {
    title: "God of War Ragnarok",
    genre: "Action Adventure",
    exclusive: true,
  },
  { title: "Spider-Man 2", genre: "Action Adventure", exclusive: true },
  { title: "Horizon Forbidden West", genre: "Action RPG", exclusive: true },
  { title: "The Last of Us Part II", genre: "Action Adventure", exclusive: true },
  { title: "Demon's Souls", genre: "Action RPG", exclusive: true },
  { title: "Ratchet & Clank", genre: "Action Adventure", exclusive: true },
  { title: "Gran Turismo 7", genre: "Racing", exclusive: true },
  { title: "Returnal", genre: "Roguelike", exclusive: true },
  { title: "Final Fantasy XVI", genre: "Action RPG" },
  { title: "FC 25", genre: "Sports" },
  { title: "NBA 2K25", genre: "Sports" },
  { title: "Call of Duty: MW III", genre: "Shooter" },
  { title: "Mortal Kombat 1", genre: "Fighting" },
  { title: "It Takes Two", genre: "Co-op Adventure" },
  { title: "Overcooked! All You Can Eat", genre: "Party" },
  { title: "Astro Bot", genre: "Platformer", exclusive: true },
];

export function PS5Games() {
  return (
    <section id="ps5" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Gamepad className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              PS5 Games
            </h2>
          </div>
          <p className="text-muted-foreground">
            PlayStation exclusives and multiplayer favorites in private gaming
            rooms
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {ps5Games.map((game) => (
            <div
              key={game.title}
              className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
            >
              {game.exclusive && (
                <div className="absolute -top-2 -right-2">
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full">
                    PS5
                  </span>
                </div>
              )}
              <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600/20 transition-colors">
                <Gamepad className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1 leading-tight">
                {game.title}
              </h3>
              <p className="text-xs text-muted-foreground">{game.genre}</p>
            </div>
          ))}
        </div>

        {/* Room Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Room 1 - Squad Room</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect for group gaming sessions. Fits up to 4 players with a 65&quot;
              4K TV and surround sound.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                4 Controllers
              </span>
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                65&quot; 4K TV
              </span>
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                Surround Sound
              </span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Room 2 - Duo Room</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Intimate setup for 2 players. Great for co-op adventures or
              competitive 1v1 matches.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                2 Controllers
              </span>
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                55&quot; 4K TV
              </span>
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                Premium Audio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
