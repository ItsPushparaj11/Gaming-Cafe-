import { User } from "lucide-react";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Former esports player turned entrepreneur. Valorant Immortal.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    bio: "Keeps everything running smoothly. Casual RPG enthusiast.",
  },
  {
    name: "Karthik Reddy",
    role: "Technical Lead",
    bio: "Hardware wizard. Built his first PC at 12. Racing sim champion.",
  },
  {
    name: "Sneha Patel",
    role: "Community Manager",
    bio: "Organizes our tournaments and events. Apex Legends main.",
  },
];

export function TheTeam() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground">
            The passionate gamers behind PixelArena
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
