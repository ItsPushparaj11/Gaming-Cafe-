import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { AboutHero } from "@/ui- components/about/about-hero";
import { OurStory } from "@/ui- components/about/our-story";
import { OurMission } from "@/ui- components/about/our-mission";
import { TheTeam } from "@/ui- components/about/the-team";

export const metadata = {
  title: "About Us | PixelArena Gaming Cafe",
  description:
    "Learn about PixelArena's story, mission, and the passionate team behind Bengaluru's premier gaming destination.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <OurStory />
      <OurMission />
      <TheTeam />
      <Footer />
    </main>
  );
}
