import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { GamesHero } from "@/ui- components/games/games-hero";
import { PCGames } from "@/ui- components/games/pc-games";
import { PS5Games } from "@/ui- components/games/ps5-games";
import { RacingGames } from "@/ui- components/games/racing-games";

export const metadata = {
  title: "Games | PixelArena Gaming Cafe",
  description:
    "Explore our extensive library of PC games, PS5 exclusives, and racing simulators. From Valorant to Gran Turismo, we have something for every gamer.",
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <GamesHero />
      <PCGames />
      <PS5Games />
      <RacingGames />
      <Footer />
    </main>
  );
}
