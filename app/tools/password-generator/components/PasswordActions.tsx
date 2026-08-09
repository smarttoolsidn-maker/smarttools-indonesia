import ActionButton from "@/components/tools/ActionButton";

interface PasswordActionsProps {
  onGenerate: () => void;
}

export default function PasswordActions({
  onGenerate,
}: PasswordActionsProps) {
  return (
    <div className="mt-8">

      <ActionButton
        onClick={onGenerate}
        color="blue"
      >
        Generate Password
      </ActionButton>

    </div>
  );
}