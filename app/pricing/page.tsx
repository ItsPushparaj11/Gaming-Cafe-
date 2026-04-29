import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { HourlyRates } from "@/components/pricing/hourly-rates";
import { ComboOffers } from "@/components/pricing/combo-offers";
import { Memberships } from "@/components/pricing/memberships";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

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
