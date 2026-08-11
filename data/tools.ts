export interface Tool {
  id: string;

  title: string;

  description: string;

  seoTitle?: string;

  seoDescription?: string;

  keywords?: string[];

  icon: string;

  href: string;

  category:
    | "Developer"
    | "Generator"
    | "Converter"
    | "Text"
    | "Image"
    | "PDF"
    | "Color"
    | "Utility";

  badge?: string;
  badgeColor?: string;

  users?: string;
  rating?: string;

  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

export const tools: Tool[] = [
  {
  id: "password-generator",
  title: "Password Generator",
  description: "Generate password yang kuat dan aman.",
  seoTitle: "Password Generator Online Gratis",
seoDescription:
  "Generate password online yang kuat, aman, acak, dan gratis dengan SmartTools Indonesia.",
keywords: [
  "password generator",
  "password generator online",
  "password gratis",
  "random password generator",
  "password aman",
],
  icon: "🔐",
  href: "/tools/password-generator",
  category: "Generator",
  badge: "Popular",
  badgeColor: "bg-orange-500",
  users: "12K+",
  rating: "5.0",

  featured: true,
  popular: true,
},

  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    description: "Generate QR Code secara gratis.",
    seoTitle: "QR Code Generator Online Gratis",
seoDescription:
  "Buat QR Code online secara gratis dari teks atau URL dengan cepat dan mudah.",
keywords: [
  "qr code generator",
  "qr generator",
  "buat qr code",
  "qr code online",
  "qr code gratis",
],
    icon: "📱",
    href: "/tools/qr-code-generator",
    category: "Generator",
    badge: "New",
    badgeColor: "bg-green-500",
    users: "8K+",
    rating: "4.9",
    featured: true,
    new: true,
  },

  {
    id: "word-counter",
    title: "Word Counter",
    description: "Hitung kata, karakter, dan paragraf.",
    seoTitle: "Word Counter Online Gratis",
seoDescription:
  "Hitung kata, karakter, dan paragraf secara online dengan cepat dan gratis.",
keywords: [
  "word counter",
  "penghitung kata",
  "character counter",
  "hitung kata online",
  "word count",
],
    icon: "📝",
    href: "/tools/word-counter",
    category: "Text",
    badge: "Text",
    badgeColor: "bg-pink-500",
    users: "10K+",
    rating: "4.9",
  },

  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Beautify dan Minify JSON.",
    seoTitle: "JSON Formatter Online Gratis",
seoDescription:
  "Format, beautify, dan minify JSON secara online dengan cepat dan mudah.",
keywords: [
  "json formatter",
  "json beautifier",
  "json formatter online",
  "json minifier",
  "format json",
],
    icon: "📄",
    href: "/tools/json-formatter",
    category: "Developer",
    badge: "Developer",
    badgeColor: "bg-purple-500",
    users: "9K+",
    rating: "4.9",
    featured: true,
    
  },

  {
    id: "json-validator",
    title: "JSON Validator",
    description: "Validasi struktur JSON secara instan.",
    seoTitle: "JSON Validator Online Gratis",
seoDescription:
  "Validasi struktur JSON secara online untuk menemukan kesalahan format dengan cepat.",
keywords: [
  "json validator",
  "json validator online",
  "validate json",
  "json checker",
  "cek json",
],
    icon: "🛡️",
    href: "/tools/json-validator",
    category: "Developer",
    badge: "Developer",
    badgeColor: "bg-indigo-500",
    users: "7K+",
    rating: "4.9",
    featured: true,
  },

  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate UUID v4 secara instan dan gratis.",
    seoTitle: "UUID Generator Online Gratis",
seoDescription:
  "Generate UUID v4 secara instan, gratis, dan langsung dari browser.",
keywords: [
  "uuid generator",
  "uuid v4 generator",
  "generate uuid",
  "uuid online",
  "random uuid",
],
    icon: "🆔",
    href: "/tools/uuid-generator",
    category: "Developer",
    badge: "Developer",
    badgeColor: "bg-blue-500",
    users: "4K+",
    rating: "4.9",
  },

  {
    id: "base64-encoder",
    title: "Base64 Encoder",
    description: "Encode dan Decode Base64 secara instan.",
    seoTitle: "Base64 Encoder Decoder Online Gratis",
seoDescription:
  "Encode dan decode teks Base64 secara online dengan cepat dan gratis.",
keywords: [
  "base64 encoder",
  "base64 decoder",
  "base64 encode",
  "base64 decode",
  "base64 converter",
],
    icon: "🔐",
    href: "/tools/base64-encoder",
    category: "Converter",
    badge: "Converter",
    badgeColor: "bg-cyan-500",
    users: "6K+",
    rating: "4.9",
  },

  {
    id: "url-encoder",
    title: "URL Encoder",
    description: "Encode dan Decode URL secara instan.",
    seoTitle: "URL Encoder Decoder Online Gratis",
seoDescription:
  "Encode dan decode URL secara online dengan cepat, mudah, dan gratis.",
keywords: [
  "url encoder",
  "url decoder",
  "url encode",
  "url decode",
  "url converter",
],
    icon: "🌐",
    href: "/tools/url-encoder",
    category: "Converter",
    badge: "Converter",
    badgeColor: "bg-sky-500",
    users: "5K+",
    rating: "4.9",
  },

  {
    id: "lorem-ipsum-generator",
    title: "Lorem Ipsum Generator",
    description:
      "Generate teks Lorem Ipsum dengan jumlah paragraf yang dapat diatur.",
      seoTitle: "Lorem Ipsum Generator Online Gratis",
seoDescription:
  "Generate teks Lorem Ipsum dengan jumlah paragraf yang dapat diatur secara gratis.",
keywords: [
  "lorem ipsum generator",
  "lorem ipsum",
  "dummy text generator",
  "placeholder text",
  "lorem ipsum online",
],
    icon: "📜",
    href: "/tools/lorem-ipsum-generator",
    category: "Text",
    badge: "Text",
    badgeColor: "bg-pink-500",
    users: "4K+",
    rating: "4.9",
  },

  {
    id: "text-case-converter",
    title: "Text Case Converter",
    description:
      "Ubah teks menjadi UPPERCASE, lowercase, Title Case, Sentence Case, atau Toggle Case.",
      seoTitle: "Text Case Converter Online Gratis",
seoDescription:
  "Ubah teks menjadi uppercase, lowercase, title case, sentence case, dan toggle case.",
keywords: [
  "text case converter",
  "uppercase converter",
  "lowercase converter",
  "title case converter",
  "sentence case converter",
],
    icon: "🔤",
    href: "/tools/text-case-converter",
    category: "Text",
    badge: "Text",
    badgeColor: "bg-pink-500",
    users: "7K+",
    rating: "4.9",
  },

  {
    id: "hash-generator",
    title: "Hash Generator",
    description:
      "Generate MD5, SHA1, SHA256, dan SHA512 secara instan.",
      seoTitle: "Hash Generator Online Gratis",
seoDescription:
  "Generate hash MD5, SHA1, SHA256, dan SHA512 secara online dengan cepat.",
keywords: [
  "hash generator",
  "md5 generator",
  "sha256 generator",
  "sha512 generator",
  "hash online",
],
    icon: "🔑",
    href: "/tools/hash-generator",
    category: "Developer",
    badge: "Developer",
    badgeColor: "bg-violet-500",
    users: "6K+",
    rating: "4.9",
  },

  {
    id: "timestamp-converter",
    title: "Timestamp Converter",
    description:
      "Konversi Unix Timestamp ke Date dan sebaliknya.",
      seoTitle: "Unix Timestamp Converter Online Gratis",
seoDescription:
  "Konversi Unix Timestamp ke tanggal dan waktu atau sebaliknya secara online.",
keywords: [
  "timestamp converter",
  "unix timestamp converter",
  "unix timestamp",
  "timestamp to date",
  "date to timestamp",
],
    icon: "⏰",
    href: "/tools/timestamp-converter",
    category: "Utility",
    badge: "Utility",
    badgeColor: "bg-slate-500",
    users: "5K+",
    rating: "4.9",
  },

  {
    id: "color-converter",
    title: "Color Converter",
    description:
      "Konversi warna HEX dan RGB dengan live preview.",
      seoTitle: "Color Converter HEX RGB Online Gratis",
seoDescription:
  "Konversi warna HEX dan RGB secara online dengan cepat dan mudah.",
keywords: [
  "color converter",
  "hex to rgb",
  "rgb to hex",
  "color converter online",
  "hex rgb converter",
],
    icon: "🎨",
    href: "/tools/color-converter",
    category: "Color",
    badge: "Color",
    badgeColor: "bg-rose-500",
    users: "4K+",
    rating: "4.9",
  },

  {
    id: "jwt-decoder",
    title: "JWT Decoder",
    description:
      "Decode JSON Web Token (JWT) secara instan.",
      seoTitle: "JWT Decoder Online Gratis",
seoDescription:
  "Decode dan lihat payload JSON Web Token (JWT) secara online dengan cepat.",
keywords: [
  "jwt decoder",
  "jwt decoder online",
  "decode jwt",
  "jwt token decoder",
  "json web token decoder",
],
    icon: "🛡️",
    href: "/tools/jwt-decoder",
    category: "Developer",
    badge: "Developer",
    badgeColor: "bg-indigo-500",
    users: "4K+",
    rating: "4.9",
  },

  {
    id: "markdown-preview",
    title: "Markdown Preview",
    description:
      "Preview Markdown secara realtime.",
      seoTitle: "Markdown Preview Online Gratis",
seoDescription:
  "Preview dan konversi Markdown secara online dengan cepat dan mudah.",
keywords: [
  "markdown preview",
  "markdown editor",
  "markdown preview online",
  "markdown converter",
  "markdown online",
],
    icon: "📘",
    href: "/tools/markdown-preview",
    category: "Text",
    badge: "Text",
    badgeColor: "bg-pink-500",
    users: "5K+",
    rating: "4.9",
  },
];