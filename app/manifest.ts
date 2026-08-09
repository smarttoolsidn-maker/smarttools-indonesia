import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmartTools Indonesia",

    short_name: "SmartTools",

    description:
      "Kumpulan tools online gratis untuk developer, mahasiswa, pekerja, dan kebutuhan sehari-hari.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    lang: "id",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}