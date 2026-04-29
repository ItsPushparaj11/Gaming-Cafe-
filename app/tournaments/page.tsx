import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TournamentsHero } from "@/components/tournaments/tournaments-hero";
import { UpcomingTournaments } from "@/components/tournaments/upcoming-tournaments";
import { PastTournaments } from "@/components/tournaments/past-tournaments";
import { TournamentCTA } from "@/components/tournaments/tournament-cta";

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
