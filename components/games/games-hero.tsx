import Link from "next/link";

const categories = [
  { id: "pc", label: "PC Games", count: "100+" },
  { id: "ps5", label: "PS5 Games", count: "50+" },
  { id: "racing", label: "Racing Sims", count: "15+" },
];

export function GamesHero() {
  return (
    <section className="pt-24 pb-16 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Game Library
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Games Collection
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From competitive esports titles to immersive single-player
            adventures. Our library is constantly updated with the latest
            releases.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all group"
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {category.label}
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
