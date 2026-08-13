"use client";


import Link from "next/link";

const tools = [
{
  title: "Password Generator",
  description: "Generate password yang kuat dan aman.",
  icon: "🔐",
  href: "/tools/password-generator",
  users: "28K+",
  rating: "4.9",
},
{
  title: "QR Code Generator",
  description: "Buat QR Code gratis dari teks atau URL.",
  icon: "📱",
  href: "/tools/qr-code-generator",
  users: "18K+",
  rating: "4.9",
},
{
  title: "Word Counter",
  description: "Hitung jumlah kata, karakter, dan paragraf.",
  icon: "📝",
  href: "/tools/word-counter",
  users: "15K+",
  rating: "4.8",
},
{
  title: "JSON Formatter",
  description: "Format, beautify, minify, dan validasi JSON secara instan.",
  icon: "📄",
  href: "/tools/json-formatter",
  users: "12K+",
  rating: "4.9",
},
{
  title: "JSON Validator",
  description: "Validasi JSON secara instan.",
  icon: "✅",
  href: "/tools/json-validator",
  users: "8K+",
  rating: "4.9",
},
{
  title: "UUID Generator",
  description: "Generate UUID v4 untuk kebutuhan developer.",
  icon: "🆔",
  href: "/tools/uuid-generator",
  users: "4K+",
  rating: "4.9",
},
{
  title: "Base64 Encoder",
  description: "Encode dan Decode Base64 dengan cepat.",
  icon: "🔐",
  href: "/tools/base64-encoder",
  users: "6K+",
  rating: "4.9",
},
{
  title: "URL Encoder",
  description: "Encode dan Decode URL dengan cepat.",
  icon: "🌐",
  href: "/tools/url-encoder",
  users: "5K+",
  rating: "4.9",
},
{
  title: "Lorem Ipsum Generator",
  description:
    "Generator placeholder text untuk kebutuhan desain dan development.",
  icon: "📝",
  href: "/tools/lorem-ipsum-generator",
  users: "4K+",
  rating: "4.9",
},
{
  title: "Text Case Converter",
  description: "Konversi teks ke berbagai format huruf dengan cepat.",
  icon: "🔤",
  href: "/tools/text-case-converter",
  users: "7K+",
  rating: "4.9",
},
{
  title: "Hash Generator",
  description: "Generate hash MD5, SHA1, SHA256, dan SHA512.",
  icon: "🔐",
  href: "/tools/hash-generator",
  users: "6K+",
  rating: "4.9",
},
{
  title: "Timestamp Converter",
  description: "Konversi Unix Timestamp menjadi tanggal dan waktu.",
  icon: "⏰",
  href: "/tools/timestamp-converter",
  users: "5K+",
  rating: "4.9",
},
{
  title: "Color Converter",
  description: "Konversi HEX ke RGB dengan preview warna.",
  icon: "🎨",
  href: "/tools/color-converter",
  users: "4K+",
  rating: "4.9",
},
{
  title: "JWT Decoder",
  description: "Decode JWT Header, Payload, dan Expiration.",
  icon: "🔐",
  href: "/tools/jwt-decoder",
  users: "4K+",
  rating: "4.9",
},
{
title:"Markdown Preview",
description:"Editor Markdown realtime dengan preview.",
icon:"📝",
href:"/tools/markdown-preview",
users:"5K+",
rating:"4.9",
},
];

export default function PopularTools() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Popular Tools
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Tools favorit yang paling sering digunakan pengguna.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
  <div key={tool.title}>
    <Link
      href={tool.href}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:shadow-blue-500/20"
    >
      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {tool.icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
        {tool.title}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>

        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {tool.rating}
        </span>
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tool.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          👥 {tool.users}
        </span>

        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Gunakan →
        </span>
      </div>
    </Link>
  </div>
))}
        </div>
      </div>
    </section>
  );
}