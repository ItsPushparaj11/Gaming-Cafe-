import Link from "next/link";
import { Monitor, Gamepad, Car, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const rates = [
  {
    icon: Monitor,
    title: "PC Gaming",
    price: "₹80",
    unit: "/hour",
    description: "High-performance gaming on RTX 4070 rigs",
    features: [
      "RTX 4070 GPU",
      "240Hz Monitor",
      "Mechanical Keyboard",
      "Gaming Mouse",
      "Headset Included",
      "100+ Games Library",
    ],
    color: "primary",
    popular: false,
  },
  {
    icon: Gamepad,
    title: "PS5 Room",
    price: "₹400",
    unit: "/hour",
    description: "Private gaming room with PS5 console",
    features: [
      "Private Room",
      "65\" 4K TV",
      "Surround Sound",
      "4 Controllers",
      "50+ PS5 Games",
      "Up to 4 Players",
    ],
    color: "blue",
    popular: true,
  },
  {
    icon: Car,
    title: "Racing Sim",
    price: "₹150",
    unit: "/30 min",
    description: "Professional racing simulator experience",
    features: [
      "Force Feedback Wheel",
      "Racing Pedals",
      "6-Speed Shifter",
      "Triple Monitors",
      "Racing Seat",
      "15+ Racing Games",
    ],
    color: "emerald",
    popular: false,
  },
];

export function HourlyRates() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Hourly Rates
          </h2>
          <p className="text-muted-foreground">
            Walk in anytime and start gaming
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rates.map((rate) => (
            <div
              key={rate.title}
              className={`relative bg-background border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                rate.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {rate.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Best for Groups
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    rate.color === "primary"
                      ? "bg-primary/10"
                      : rate.color === "blue"
                        ? "bg-blue-600/10"
                        : "bg-emerald-600/10"
                  }`}
                >
                  <rate.icon
                    className={`w-6 h-6 ${
                      rate.color === "primary"
                        ? "text-primary"
                        : rate.color === "blue"
                          ? "text-blue-500"
                          : "text-emerald-500"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {rate.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {rate.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {rate.price}
                </span>
                <span className="text-muted-foreground">{rate.unit}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {rate.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        rate.color === "primary"
                          ? "text-primary"
                          : rate.color === "blue"
                            ? "text-blue-500"
                            : "text-emerald-500"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  rate.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="/contact#booking">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
