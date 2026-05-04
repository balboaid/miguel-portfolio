import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          MFN
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 text-gray-300">
          <a href="#work" className="block py-2">Work</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}