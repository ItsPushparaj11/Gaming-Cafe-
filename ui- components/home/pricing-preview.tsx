import Link from "next/link";
import { Button } from "@/ui- components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const pricingHighlights = [
  {
    title: "PC Gaming",
    price: "₹80",
    unit: "/hour",
    features: ["High-end RTX PC", "240Hz Monitor", "Gaming Peripherals"],
    popular: false,
  },
  {
    title: "PS5 Room",
    price: "₹400",
    unit: "/hour",
    features: ["Private Room", "65\" 4K TV", "Up to 4 Players"],
    popular: true,
  },
  {
    title: "Racing Sim",
    price: "₹150",
    unit: "/30 min",
    features: ["Force Feedback Wheel", "Triple Monitors", "Racing Seat"],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,var(--border)_50%,transparent_100%)] opacity-20 bg-[length:4px_100%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple, Transparent Rates
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            No hidden fees. Pay only for what you play. Members enjoy exclusive
            discounts and priority booking.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingHighlights.map((plan) => (
            <div
              key={plan.title}
              className={`relative bg-background border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border hover:bg-secondary"
                }`}
              >
                <Link href="/contact#booking">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Full pricing link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Looking for combo deals or memberships?
          </p>
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
          >
            <Link href="/pricing">
              View Full Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
