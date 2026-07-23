import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <h2 className="text-5xl font-bold">
          Selamat Datang di SmartTools Indonesia 🚀
        </h2>
      </main>
    </>
  );
}