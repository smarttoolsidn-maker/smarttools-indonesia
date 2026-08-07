export function hexToRgb(
  hex: string
) {
  const value =
    hex.replace("#", "");

  const bigint =
    parseInt(value, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}