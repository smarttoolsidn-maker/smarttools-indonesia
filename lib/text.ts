export function wordCount(
  text: string
) {
  if (!text.trim()) return 0;

  return text.trim().split(/\s+/).length;
}

export function characterCount(
  text: string
) {
  return text.length;
}

export function characterWithoutSpace(
  text: string
) {
  return text.replace(/\s/g, "").length;
}

export function paragraphCount(
  text: string
) {
  if (!text.trim()) return 0;

  return text.trim().split(/\n+/).length;
}

export function readingTime(
  words: number
) {
  return Math.max(
    1,
    Math.ceil(words / 200)
  );
}

export function titleCase(
  text: string
) {
  return text.replace(
    /\w\S*/g,
    (word) =>
      word.charAt(0).toUpperCase() +
      word.substring(1).toLowerCase()
  );
}

export function sentenceCase(
  text: string
) {
  if (!text.length) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
}

export function toggleCase(
  text: string
) {
  return text
    .split("")
    .map((char) =>
      char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase()
    )
    .join("");
}