import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { TournamentsHero } from "@/ui- components/tournaments/tournaments-hero";
import { UpcomingTournaments } from "@/ui- components/tournaments/upcoming-tournaments";
import { PastTournaments } from "@/ui- components/tournaments/past-tournaments";
import { TournamentCTA } from "@/ui- components/tournaments/tournament-cta";

export const metadata = {
  title: "Tournaments | PixelArena Gaming Cafe",
  description:
    "Join our esports tournaments and compete for cash prizes. Weekly and monthly events across Valorant, FIFA, and racing games.",
};

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TournamentsHero />
      <UpcomingTournaments />
      <PastTournaments />
      <TournamentCTA />
      <Footer />
    </main>
  );
}
