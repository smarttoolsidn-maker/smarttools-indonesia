export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          SmartTools Indonesia
        </h1>

        <div className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Tools
          </a>

          <a href="#" className="hover:text-blue-600">
            Blog
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}