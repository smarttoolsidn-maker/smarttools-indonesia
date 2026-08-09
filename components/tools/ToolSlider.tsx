interface ToolSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function ToolSlider({
  label,
  value,
  min,
  max,
  onChange,
}: ToolSliderProps) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <label className="font-semibold dark:text-white">
          {label}
        </label>

        <span className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold text-white">
          {value}
        </span>

      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full accent-blue-600"
      />

    </div>
  );
}