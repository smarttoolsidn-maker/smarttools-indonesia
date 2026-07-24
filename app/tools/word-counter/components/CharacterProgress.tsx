type CharacterProgressProps = {
  characters: number;
  maxCharacters?: number;
};

export default function CharacterProgress({
  characters,
  maxCharacters = 10000,
}: CharacterProgressProps) {
  const percentage = Math.min((characters / maxCharacters) * 100, 100);

  return (
    <div className="mt-4">

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {characters} / {maxCharacters} Characters
      </p>

      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  );
}