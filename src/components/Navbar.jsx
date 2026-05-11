import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-7xl flex justify-between items-center py-7">
      {/* 🔥 LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="logo"
          className="w-14 md:w-10 h-auto object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
        />
        <span className="font-semibold tracking-wide text-sm">
          ASHISH SHARMA
        </span>
      </div>

      {/* 🔥 DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <a className="hover:text-white cursor-pointer">Home</a>
        <a className="hover:text-white cursor-pointer">Projects</a>
        <a className="hover:text-white cursor-pointer">Growth</a>
        <a className="hover:text-white cursor-pointer">Designs</a>
        <a className="hover:text-white cursor-pointer">Contact</a>
      </div>

      {/* 🔥 RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* THEME TOGGLE */}

        <a
          href={`https://wa.me/919336002651?text=${encodeURIComponent(
            "Hi, I saw your portfolio and want to discuss a project",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm hover:scale-105 transition"
        >
          Let's Work
        </a>

        {/* 🍔 MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
        >
          ☰
        </button>
      </div>

      {/* 🔥 MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-20 right-6 w-64 p-5 rounded-2xl bg-zinc-900 space-y-4 shadow-xl md:hidden">
          <p>Home</p>
          <p>Projects</p>
          <p>Growth</p>
          <p>Designs</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  );
}
