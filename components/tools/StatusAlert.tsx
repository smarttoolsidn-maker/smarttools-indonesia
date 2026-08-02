interface StatusAlertProps {
  status: string;
}

export default function StatusAlert({
  status,
}: StatusAlertProps) {

  if (!status) return null;

  const success =
    status.startsWith("✅");

  return (

    <div
      className={`mt-6 rounded-2xl p-4 text-center font-medium ${
        success
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      }`}
    >
      {status}
    </div>

  );
}