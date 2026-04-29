import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryCTA } from "@/components/gallery/gallery-cta";

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
