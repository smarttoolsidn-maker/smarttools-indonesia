interface ToolActionsProps {
  children: React.ReactNode;
}

export default function ToolActions({
  children,
}: ToolActionsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {children}
    </div>
  );
}