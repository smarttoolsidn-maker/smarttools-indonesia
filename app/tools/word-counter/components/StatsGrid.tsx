import StatCard from "./StatCard";

type Stats = {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  paragraphs: number;
  readingTime: string;
};

type StatsGridProps = {
  stats: Stats;
};

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-5">

      <StatCard
        title="Words"
        value={stats.words}
        icon="📝"
      />

      <StatCard
        title="Characters"
        value={stats.characters}
        icon="🔤"
      />

      <StatCard
        title="No Spaces"
        value={stats.charactersNoSpaces}
        icon="✂️"
      />

      <StatCard
        title="Paragraphs"
        value={stats.paragraphs}
        icon="📄"
      />

      <StatCard
        title="Reading"
        value={stats.readingTime}
        icon="📖"
      />

    </div>
  );
}