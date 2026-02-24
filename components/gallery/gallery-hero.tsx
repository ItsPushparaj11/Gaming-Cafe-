export function GalleryHero() {
  return (
    <section className="pt-24 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Take a Virtual Tour
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our premium gaming setups, cozy interiors, and the vibrant
            atmosphere that makes PixelArena the best gaming destination in
            Bengaluru.
          </p>
        </div>
      </div>
    </section>
  );
}
