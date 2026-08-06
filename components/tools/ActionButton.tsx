import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;

  onClick?: () => void;

  icon?: ReactNode;

  color?: "blue" | "green" | "red" | "gray";

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  type?: "button" | "submit" | "reset";

  className?: string;
}

export default function ActionButton({
  children,
  onClick,
  icon,
  color = "blue",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
}: ActionButtonProps) {
  const styles = {
    blue:
      "bg-blue-600 text-white hover:bg-blue-700",

    green:
      "bg-green-600 text-white hover:bg-green-700",

    red:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",

    gray:
      "border border-slate-300 bg-white hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2
        rounded-2xl
        px-6 py-3
        font-semibold
        transition-all duration-300
        hover:scale-105
        active:scale-95
        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${styles[color]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <svg
          className="h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.25"
          />

          <path
            d="M22 12a10 10 0 0 1-10 10"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      ) : (
        icon
      )}

      {loading ? "Loading..." : children}
    </button>
  );
}