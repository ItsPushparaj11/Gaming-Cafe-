import { Navigation } from "@/ui- components/navigation";
import { Footer } from "@/ui- components/footer";
import { GalleryHero } from "@/ui- components/gallery/gallery-hero";
import { GalleryGrid } from "@/ui- components/gallery/gallery-grid";
import { GalleryCTA } from "@/ui- components/gallery/gallery-cta";

export const metadata = {
  title: "Gallery | PixelArena Gaming Cafe",
  description:
    "Take a virtual tour of PixelArena Gaming Cafe. See our gaming setups, PS5 rooms, racing simulator, and cafe interiors.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </main>
  );
}
