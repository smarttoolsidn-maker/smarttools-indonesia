export function decodeJWT(token: string) {
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error("Invalid JWT");
  }

  const payload = parts[1];

  const decoded = atob(payload);

  return JSON.stringify(
    JSON.parse(decoded),
    null,
    2
  );
}