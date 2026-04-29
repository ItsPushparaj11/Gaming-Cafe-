import { Gamepad2 } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-background to-secondary rounded-2xl overflow-hidden border border-border flex items-center justify-center">
            <Gamepad2 className="w-32 h-32 text-muted-foreground/20" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              How It All Started
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                PixelArena was born in 2024 from a simple frustration: why
                wasn&apos;t there a world-class gaming cafe in Bengaluru? As
                lifelong gamers and tech enthusiasts, we knew there had to be a
                better way to experience gaming together.
              </p>
              <p>
                We started with a vision of creating more than just a place to
                play games. We wanted to build a community hub where gamers
                could connect, compete, and celebrate their passion for gaming.
                A place with proper equipment, comfortable spaces, and a
                welcoming atmosphere.
              </p>
              <p>
                After months of planning, sourcing the best hardware, and
                designing our space with gamers in mind, PixelArena opened its
                doors in Koramangala. Since then, we&apos;ve hosted hundreds of
                gaming sessions, dozens of tournaments, and watched our
                community grow into something truly special.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-3xl font-bold text-primary">2024</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Sessions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2K+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
