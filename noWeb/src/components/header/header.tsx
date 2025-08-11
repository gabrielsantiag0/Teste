import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../../assets/logo.png"; 
import SearchandQuote from "../button/SearchandQuote";
import SearchButton from "../search/SearchButton";

import '../../App.css'
import "./header.css"; 

export default function Header() {
   const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-10" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-black">
          <ul className="flex justify-end lg:items-center flex-grow pe-3 font-dm lg:gap-8 w-full">
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
              <a className="a-header" href="#about">
                About Us
              </a>
            </li>

            <li className="relative inline-flex items-center">
              <a className="a-header" href="#portifolio">
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
        <div className="hidden md:flex items-center gap-4">
          <SearchButton />
          <SearchandQuote />
        </div>
         <button 
          className="block md:hidden p-2" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-7 w-7 text-black" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-black" />
          )}
        </button>
      </div>

     {mobileOpen && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
    <div className="flex justify-between items-center mb-6">
      <img src={logo} alt="Logo" className="h-10" />
      <button onClick={() => setMobileOpen(false)}>
        <XMarkIcon className="h-7 w-7 text-black" />
      </button>
    </div>

    <ul className="flex flex-col gap-6 font-dm text-lg">
      <li><a className="a-header" href="">Home</a></li>
      <li><a className="a-header" href="#about">About Us</a></li>
      <li><a className="a-header" href="#portifolio">Portfolios</a></li>
      <li><a className="a-header" href="">Pages</a></li>
      <li><a className="a-header" href="">Blog</a></li>
      <li><a className="a-header" href="">Contact Us</a></li>
    <div className="mt-auto flex gap-4">
      <SearchButton />
      <SearchandQuote />
    </div>
    </ul>

  </div>
)}

    </header>
  );
}
