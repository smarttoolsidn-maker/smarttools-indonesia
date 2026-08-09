export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

export function toTitleCase(text: string): string {
  return text.replace(
    /\w\S*/g,
    (word) =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
  );
}

export function toSentenceCase(text: string): string {
  if (!text.trim()) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
}