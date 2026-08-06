export interface Tool {
  id: string;
  title: string;
  description: string;
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
    icon: "📘",
    href: "/tools/markdown-preview",
    category: "Text",
    badge: "Text",
    badgeColor: "bg-pink-500",
    users: "5K+",
    rating: "4.9",
  },
];