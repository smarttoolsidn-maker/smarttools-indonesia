interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({
  password,
}: PasswordStrengthProps) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const percentage = score * 20;

  let color = "bg-red-500";
  let label = "Weak";

  if (score >= 3) {
    color = "bg-yellow-500";
    label = "Medium";
  }

  if (score >= 5) {
    color = "bg-green-500";
    label = "Strong";
  }

  return (
    <div className="mt-6">

      <div className="mb-2 flex justify-between">

        <span className="font-semibold dark:text-white">
          Password Strength
        </span>

        <span className="font-bold">
          {label}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

        <div
          className={`${color} h-full transition-all duration-500`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}