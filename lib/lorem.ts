const WORDS = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
];

export function generateLorem(words: number): string {
  const result: string[] = [];

  for (let i = 0; i < words; i++) {
    result.push(
      WORDS[i % WORDS.length]
    );
  }

  const text = result.join(" ");

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1) +
    "."
  );
}