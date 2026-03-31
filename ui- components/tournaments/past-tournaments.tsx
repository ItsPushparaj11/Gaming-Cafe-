import { Trophy, Medal } from "lucide-react";

const pastTournaments = [
  {
    title: "Valorant Champions Cup - January",
    game: "Valorant",
    date: "Jan 18, 2026",
    winner: "Team Phoenix",
    runnerUp: "Cyber Wolves",
    prize: "₹25,000",
    participants: 16,
  },
  {
    title: "FIFA Pro League - Season 1",
    game: "FC 25",
    date: "Jan 11, 2026",
    winner: "RonaldoFan99",
    runnerUp: "MessiMaster",
    prize: "₹10,000",
    participants: 32,
  },
  {
    title: "New Year Racing Cup",
    game: "Forza Motorsport",
    date: "Jan 1, 2026",
    winner: "SpeedDemon",
    runnerUp: "DriftKing",
    prize: "₹8,000",
    participants: 12,
  },
  {
    title: "Holiday TEKKEN Bash",
    game: "TEKKEN 8",
    date: "Dec 25, 2025",
    winner: "IronFist",
    runnerUp: "ThunderGod",
    prize: "₹12,000",
    participants: 24,
  },
  {
    title: "CS2 Winter Championship",
    game: "Counter-Strike 2",
    date: "Dec 15, 2025",
    winner: "Headshot Heroes",
    runnerUp: "Rush B Gaming",
    prize: "₹20,000",
    participants: 12,
  },
  {
    title: "Apex Legends Duo Cup",
    game: "Apex Legends",
    date: "Dec 8, 2025",
    winner: "Predator Squad",
    runnerUp: "Diamond Dogs",
    prize: "₹15,000",
    participants: 20,
  },
];

export function PastTournaments() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Past Tournaments
          </h2>
          <p className="text-muted-foreground">
            Recent events and their champions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastTournaments.map((tournament) => (
            <div
              key={tournament.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded">
                  {tournament.game}
                </span>
                <span className="text-xs text-muted-foreground">
                  {tournament.date}
                </span>
              </div>

              <h3 className="font-semibold text-foreground mb-4 line-clamp-1">
                {tournament.title}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Winner</p>
                    <p className="text-sm font-medium text-foreground">
                      {tournament.winner}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-400/10 rounded-full flex items-center justify-center">
                    <Medal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Runner-up</p>
                    <p className="text-sm font-medium text-foreground">
                      {tournament.runnerUp}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Prize Pool</p>
                  <p className="text-sm font-bold text-primary">
                    {tournament.prize}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Participants</p>
                  <p className="text-sm font-medium text-foreground">
                    {tournament.participants} teams
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
