import { tools } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  const featured = tools.filter((tool) => tool.featured);

  if (featured.length === 0) return null;

  return (
    <section className="mt-20">

      <div className="mb-10 text-center">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
          ⭐ Featured Collection
        </span>

        <h2 className="mt-5 text-4xl font-extrabold dark:text-white">
          Rekomendasi SmartTools
        </h2>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Tool pilihan yang paling sering digunakan pengguna SmartTools Indonesia.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {featured.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}

      </div>

    </section>
  );
}