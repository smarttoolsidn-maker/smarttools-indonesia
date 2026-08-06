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
      <div className="mb-2 flex justify-between">
        <label className="font-semibold dark:text-white">
          {label}
        </label>

        <span className="font-bold text-blue-600">
          {value}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}