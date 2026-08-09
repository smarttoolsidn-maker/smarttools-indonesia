export function formatJSON(text: string): string {
  return JSON.stringify(
    JSON.parse(text),
    null,
    2
  );
}

export function minifyJSON(text: string): string {
  return JSON.stringify(
    JSON.parse(text)
  );
}

export function isValidJSON(text: string): boolean {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}