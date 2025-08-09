// src/components/Header/Header.tsx
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full bg-blue-400 ">
      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg" // caminho do seu logo
            alt="Logo NEX"
            className="h-8"
          />
          <span className="text-2xl font-bold text-gray-900">NEX</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <button
            onClick={() => toggleMenu("home")}
            className={`hover:text-lime-500 ${
              openMenu === "home" ? "text-lime-500 border-b-2 border-lime-500" : ""
            }`}
          >
            Home
          </button>
          <button className="hover:text-lime-500">About Us</button>
          <button
            onClick={() => toggleMenu("portfolio")}
            className="hover:text-lime-500"
          >
            Portfolio
          </button>
          <button
            onClick={() => toggleMenu("pages")}
            className="hover:text-lime-500"
          >
            Pages
          </button>
          <button
            onClick={() => toggleMenu("blog")}
            className="hover:text-lime-500"
          >
            Blog
          </button>
          <button className="hover:text-lime-500">Contact Us</button>
        </nav>

        {/* Search + Botão */}
        <div className="flex items-center gap-4">
          <button className="p-2 border rounded hover:bg-gray-100">
            {/* <FiSearch size={18} /> */}
          </button>
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded">
            Get A Quote ↗
          </button>
        </div>
      </div>
    </header>
  );
}
