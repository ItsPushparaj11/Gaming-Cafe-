import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { ContactHero } from "@/ui- components/contact/contact-hero";
import { ContactInfo } from "@/ui- components/contact/contact-info";
import { BookingForm } from "@/ui- components/contact/booking-form";
import { LocationMap } from "@/ui- components/contact/location-map";

export const metadata = {
  title: "Contact | PixelArena Gaming Cafe",
  description:
    "Get in touch with PixelArena or book your gaming session. Visit us in Koramangala, Bengaluru or contact us via WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <BookingForm />
      <LocationMap />
      <Footer />
    </main>
  );
}
