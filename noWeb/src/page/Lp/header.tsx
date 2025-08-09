// src/components/Header/Header.tsx
import { useState } from "react";

import logo from "../../assets/logo.png"; // Importando o logo
import SearchandQuote from "../../components/button/SearchandQuote";
import SearchButton from "../../components/search/SearchButton";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full ">
      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt=""
            className="h-10"
          />
         
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <ul className="flex justify-end lg:items-center flex-grow pe-3 lg:gap-15 w-full">
            <li><a className="hover:text-lime-500" href="">Home</a></li>
            <li><a className="hover:text-lime-500" href="">About Us</a></li>
            <li><a className="hover:text-lime-500" href="">Portifolio</a></li>
            <li><a className="hover:text-lime-500" href="">Pages</a></li>
            <li><a className="hover:text-lime-500" href="">Blog</a></li>
            <li><a className="hover:text-lime-500" href="">Contact Us</a></li>
          </ul>
        
        </nav>

        {/* Search + Botão */}
        <div className="flex items-center gap-4">
        <SearchButton />
         <SearchandQuote />
        </div>
      </div>
    </header>
  );
}
