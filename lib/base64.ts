export function encodeBase64(
  text: string
): string {
  return btoa(
    unescape(
      encodeURIComponent(text)
    )
  );
}

export function decodeBase64(
  text: string
): string {
  return decodeURIComponent(
    escape(
      atob(text)
    )
  );
}