import ToolCheckbox from "@/components/tools/ToolCheckbox";
import ToolSlider from "@/components/tools/ToolSlider";

interface PasswordOptionsProps {
  length: number;
  setLength: (value: number) => void;

  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;

  setUppercase: () => void;
  setLowercase: () => void;
  setNumbers: () => void;
  setSymbols: () => void;
}

export default function PasswordOptions({
  length,
  setLength,

  uppercase,
  lowercase,
  numbers,
  symbols,

  setUppercase,
  setLowercase,
  setNumbers,
  setSymbols,
}: PasswordOptionsProps) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

      <h2 className="mb-6 text-xl font-bold dark:text-white">
        Password Settings
      </h2>

      <ToolSlider
        label="Password Length"
        value={length}
        min={8}
        max={64}
        onChange={setLength}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">

        <ToolCheckbox
          checked={uppercase}
          label="Uppercase (A-Z)"
          onChange={setUppercase}
        />

        <ToolCheckbox
          checked={lowercase}
          label="Lowercase (a-z)"
          onChange={setLowercase}
        />

        <ToolCheckbox
          checked={numbers}
          label="Numbers (0-9)"
          onChange={setNumbers}
        />

        <ToolCheckbox
          checked={symbols}
          label="Symbols (!@#$%)"
          onChange={setSymbols}
        />

      </div>

    </div>
  );
}