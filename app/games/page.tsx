import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GamesHero } from "@/components/games/games-hero";
import { PCGames } from "@/components/games/pc-games";
import { PS5Games } from "@/components/games/ps5-games";
import { RacingGames } from "@/components/games/racing-games";

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
