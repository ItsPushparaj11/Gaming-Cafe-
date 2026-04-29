import Link from "next/link";
import { Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const combos = [
  {
    title: "Student Special",
    originalPrice: "₹320",
    price: "₹250",
    duration: "4 Hours PC Gaming",
    savings: "Save ₹70",
    description: "Perfect for after-college gaming sessions",
    requirements: "Valid student ID required",
    icon: Users,
  },
  {
    title: "Night Owl",
    originalPrice: "₹640",
    price: "₹500",
    duration: "8 Hours (10 PM - 6 AM)",
    savings: "Save ₹140",
    description: "Game through the night at discounted rates",
    requirements: "PC Gaming only",
    icon: Clock,
  },
  {
    title: "Squad Pack",
    originalPrice: "₹1,200",
    price: "₹999",
    duration: "3 Hours PS5 Room",
    savings: "Save ₹201",
    description: "Bring your squad for an epic gaming session",
    requirements: "Up to 4 players",
    icon: Users,
  },
  {
    title: "Race Day",
    originalPrice: "₹600",
    price: "₹450",
    duration: "2 Hours Racing Sim",
    savings: "Save ₹150",
    description: "Extended racing session with all games included",
    requirements: "Weekdays only",
    icon: Zap,
  },
];

export function ComboOffers() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Special Offers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
            Combo Deals
          </h2>
          <p className="text-muted-foreground">
            Save more with our special combo packages
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <div
              key={combo.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <combo.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {combo.savings}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {combo.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {combo.description}
              </p>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {combo.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {combo.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-primary">{combo.duration}</p>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                {combo.requirements}
              </p>

              <Button
                asChild
                variant="outline"
                className="w-full border-border hover:bg-secondary bg-transparent"
              >
                <Link href="/contact#booking">Get Combo</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
