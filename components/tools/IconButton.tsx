import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  title?: string;
}

export default function IconButton({
  icon,
  onClick,
  title,
}: IconButtonProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="rounded-xl p-3 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
    >
      {icon}
    </button>
  );
}