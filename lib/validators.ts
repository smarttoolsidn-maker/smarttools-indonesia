export function isJSON(
  text: string
) {
  try {
    JSON.parse(text);

    return true;
  } catch {
    return false;
  }
}

export function isURL(
  text: string
) {
  try {
    new URL(text);

    return true;
  } catch {
    return false;
  }
}