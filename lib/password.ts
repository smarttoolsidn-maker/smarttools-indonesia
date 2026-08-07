export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const UPPERCASE =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LOWERCASE =
  "abcdefghijklmnopqrstuvwxyz";

const NUMBERS =
  "0123456789";

const SYMBOLS =
  "!@#$%^&*()_+-=[]{}<>?";

export function generatePassword({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: PasswordOptions): string {
  let charset = "";

  if (uppercase) charset += UPPERCASE;

  if (lowercase) charset += LOWERCASE;

  if (numbers) charset += NUMBERS;

  if (symbols) charset += SYMBOLS;

  if (!charset.length) return "";

  const randomValues = new Uint32Array(length);

  crypto.getRandomValues(randomValues);

  let password = "";

  randomValues.forEach((value) => {
    password += charset[value % charset.length];
  });

  return password;
}