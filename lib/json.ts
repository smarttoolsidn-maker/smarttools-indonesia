export function formatJSON(
  text: string
) {
  return JSON.stringify(
    JSON.parse(text),
    null,
    2
  );
}

export function minifyJSON(
  text: string
) {
  return JSON.stringify(
    JSON.parse(text)
  );
}

export function validateJSON(
  text: string
) {
  try {
    JSON.parse(text);

    return true;
  } catch {
    return false;
  }
}