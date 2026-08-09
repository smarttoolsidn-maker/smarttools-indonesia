export function countWords(text: string): number {
  const trimmed = text.trim();

  if (!trimmed) return 0;

  return trimmed.split(/\s+/).length;
}

export function countCharacters(text: string): number {
  return text.length;
}

export function countCharactersNoSpaces(text: string): number {
  return text.replace(/\s/g, "").length;
}

export function countLines(text: string): number {
  if (!text) return 0;

  return text.split("\n").length;
}