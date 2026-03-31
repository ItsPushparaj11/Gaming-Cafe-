import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { PricingHero } from "@/ui- components/pricing/pricing-hero";
import { HourlyRates } from "@/ui- components/pricing/hourly-rates";
import { ComboOffers } from "@/ui- components/pricing/combo-offers";
import { Memberships } from "@/ui- components/pricing/memberships";
import { PricingFAQ } from "@/ui- components/pricing/pricing-faq";

export const metadata = {
  title: "Pricing | PixelArena Gaming Cafe",
  description:
    "Transparent pricing for PC gaming, PS5 rooms, and racing simulator. Hourly rates, combo deals, and membership plans available.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PricingHero />
      <HourlyRates />
      <ComboOffers />
      <Memberships />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
