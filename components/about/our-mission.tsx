import { Target, Users, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Premium Experience",
    description:
      "We never compromise on quality. From our RTX 4070 PCs to our premium racing simulator, every piece of equipment is chosen to deliver the best gaming experience.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Gaming is better together. We host regular events, tournaments, and community nights to bring gamers together and foster lasting friendships.",
  },
  {
    icon: Zap,
    title: "Always Evolving",
    description:
      "We constantly upgrade our equipment, expand our game library, and improve our services based on community feedback. Your suggestions shape our future.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description:
      "We're gamers ourselves. We understand what makes a great gaming session, and we're passionate about creating those moments for every visitor.",
  },
];

export function OurMission() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Our Mission & Values
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            To create the ultimate gaming destination where every gamer,
            regardless of skill level, can experience premium gaming and be part
            of a thriving community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
