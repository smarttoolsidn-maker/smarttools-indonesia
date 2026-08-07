export function generateUUID(): string {
  return crypto.randomUUID();
}

export function generateUUIDs(count: number): string[] {
  return Array.from(
    { length: count },
    () => crypto.randomUUID()
  );
}