import { ReactNode } from "react";

interface ActionButtonProps {

  children: ReactNode;

  onClick: () => void;

  icon?: ReactNode;

  color?:
    | "blue"
    | "green"
    | "red"
    | "gray";

}

export default function ActionButton({

  children,

  onClick,

  icon,

  color = "blue",

}: ActionButtonProps) {

  const styles = {

    blue:
      "bg-blue-600 hover:bg-blue-700 text-white",

    green:
      "bg-green-600 hover:bg-green-700 text-white",

    red:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",

    gray:
      "border border-slate-300 bg-white hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",

  };

  return (

    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition hover:scale-105 ${styles[color]}`}
    >

      {icon}

      {children}

    </button>

  );

}