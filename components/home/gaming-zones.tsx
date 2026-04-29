"use client";

import Link from "next/link";
import { Monitor, Gamepad, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const zones = [
  {
    icon: Monitor,
    title: "PC Gaming Zone",
    description:
      "10 high-performance gaming rigs with RTX 4070, 240Hz monitors, and mechanical keyboards. Play the latest AAA titles at max settings.",
    specs: ["RTX 4070 GPUs", "240Hz Monitors", "RGB Peripherals"],
    href: "/games#pc",
    color: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Gamepad,
    title: "PS5 Private Rooms",
    description:
      "2 private gaming rooms with PS5 consoles, 65\" 4K TVs, premium sound systems, and comfortable seating for you and your squad.",
    specs: ["65\" 4K TVs", "Surround Sound", "4-Player Setup"],
    href: "/games#ps5",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Car,
    title: "Racing Simulator",
    description:
      "Experience realistic racing with our professional-grade simulator featuring a force-feedback steering wheel, pedals, and triple monitors.",
    specs: ["Force Feedback", "Triple Monitors", "Racing Seat"],
    href: "/games#racing",
    color: "from-emerald-500/20 to-transparent",
  },
];

export function GamingZones() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Gaming Zones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Choose Your Arena
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Three unique gaming experiences under one roof. Whether you&apos;re
            into competitive PC gaming, console exclusives, or racing thrills.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${zone.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <zone.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {zone.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {zone.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {zone.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={zone.href}
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-3 gap-2 transition-all"
                >
                  Explore Games
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent"
          >
            <Link href="/games">
              View All Games
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
