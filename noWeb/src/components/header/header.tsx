// src/components/Header/Header.tsx
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import logo from "../../assets/logo.png"; // Importando o logo
import SearchandQuote from "../button/SearchandQuote";
import SearchButton from "../search/SearchButton";
import "./header.css"; // Importando o CSS específico do header

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full border-b border-gray-200">
      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-10" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-black font-regular">
          <ul className="flex justify-end lg:items-center flex-grow pe-3 lg:gap-8 w-full">
            <li className="relative inline-flex items-center">
              <a className="a-header" href="">
                Home
              </a>
              <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex items-center justify-center p-2 text-black hover:bg-gray-50">
                  <ChevronDownIcon className="size-5 " aria-hidden="true" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition 
          data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            <li>
              <a className="a-header" href="">
                About Us
              </a>
            </li>

            <li className="relative inline-flex items-center">
              <a className="a-header" href="">
                Portifolios
              </a>
              <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex items-center justify-center p-2 text-gray-900 hover:bg-gray-50">
                  <ChevronDownIcon className="size-5 " aria-hidden="true" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition 
          data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>

            <li className="relative inline-flex items-center">
              <a className="a-header" href="">
                Pages
              </a>
              <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex items-center justify-center p-2 text-gray-900 hover:bg-gray-50">
                  <ChevronDownIcon className="size-5 " aria-hidden="true" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition 
          data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>

            <li className="relative inline-flex items-center">
              <a className="a-header" href="">
                Blog
              </a>
              <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex items-center justify-center p-2 text-gray-900 hover:bg-gray-50">
                  <ChevronDownIcon className="size-5 " aria-hidden="true" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition 
          data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>

            <li>
              <a className="a-header" href="">
                Contact Us
              </a>
            </li>
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
