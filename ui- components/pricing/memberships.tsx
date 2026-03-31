import Link from "next/link";
import { Check, Star, Crown, Sparkles } from "lucide-react";
import { Button } from "@/ui- components/ui/button";

const memberships = [
  {
    name: "Bronze",
    price: "₹499",
    period: "/month",
    icon: Star,
    color: "orange",
    benefits: [
      "10% off all hourly rates",
      "Priority booking (24h advance)",
      "Free snacks on birthdays",
      "Member-only Discord access",
    ],
  },
  {
    name: "Silver",
    price: "₹999",
    period: "/month",
    icon: Sparkles,
    color: "slate",
    popular: true,
    benefits: [
      "15% off all hourly rates",
      "Priority booking (48h advance)",
      "1 free hour PC gaming/month",
      "Tournament entry discounts",
      "Member-only Discord access",
      "Birthday party discount (20%)",
    ],
  },
  {
    name: "Gold",
    price: "₹1,999",
    period: "/month",
    icon: Crown,
    color: "yellow",
    benefits: [
      "25% off all hourly rates",
      "Priority booking (72h advance)",
      "3 free hours any platform/month",
      "Free tournament entries",
      "Exclusive lounge access",
      "Guest passes (2/month)",
      "Merchandise discounts (30%)",
      "Personal gaming locker",
    ],
  },
];

export function Memberships() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Memberships
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
            Join the Arena
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits, discounts, and priority access with our
            membership plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {memberships.map((membership) => (
            <div
              key={membership.name}
              className={`relative bg-background border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                membership.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {membership.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    membership.color === "orange"
                      ? "bg-orange-500/10"
                      : membership.color === "slate"
                        ? "bg-slate-400/10"
                        : "bg-yellow-500/10"
                  }`}
                >
                  <membership.icon
                    className={`w-6 h-6 ${
                      membership.color === "orange"
                        ? "text-orange-500"
                        : membership.color === "slate"
                          ? "text-slate-400"
                          : "text-yellow-500"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {membership.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Membership</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {membership.price}
                </span>
                <span className="text-muted-foreground">{membership.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {membership.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  membership.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="/contact">Join Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
