import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { GamingZones } from "@/components/home/gaming-zones";
import { PricingPreview } from "@/components/home/pricing-preview";
import { TournamentsPreview } from "@/components/home/tournaments-preview";
import { CTASection } from "@/components/home/cta-section";

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
