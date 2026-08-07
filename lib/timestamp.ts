export function unixToDate(
  timestamp: number
) {
  const date =
    new Date(timestamp * 1000);

  if (
    Number.isNaN(date.getTime())
  ) {
    return "";
  }

  return date.toLocaleString(
    "id-ID"
  );
}

export function dateToUnix(
  date: Date
) {
  return Math.floor(
    date.getTime() / 1000
  );
}

export function getCurrentTimestamp() {
  return Math.floor(
    Date.now() / 1000
  );
}