import ToolCard from "./ToolCard";

interface Item {
  title: string;
  value: number | string;
  color?: string;
}

interface ToolStatsProps {
  items: Item[];
}

export default function ToolStats({
  items,
}: ToolStatsProps) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

      {items.map((item) => (

        <ToolCard
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />

      ))}

    </div>
  );
}