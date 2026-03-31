import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { HeroSection } from "@/ui- components/home/hero-section";
import { GamingZones } from "@/ui- components/home/gaming-zones";
import { PricingPreview } from "@/ui- components/home/pricing-preview";
import { TournamentsPreview } from "@/ui- components/home/tournaments-preview";
import { CTASection } from "@/ui- components/home/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GamingZones />
      <PricingPreview />
      <TournamentsPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
