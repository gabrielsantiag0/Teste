import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
   <footer className="bg-black text-white">
      {/* Topo: Frase e Botão */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-16">
        {/* Texto principal */}
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
            Let's Create <br /> Something Great
          </h1>
          <p className="mt-4 text-sm text-gray-400 max-w-md">
            We Shift You From Today's Reality To Tomorrow’s Potential, Ensuring
          </p>
        </div>

        {/* Botão redondo verde */}
        <div className='flex'>
  <button className="w-32 h-32 bg-lime-400 text-black font-semibold text-sm rounded-full shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2">
    Let’s Talk
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#1f1f1f">
      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
    </svg>
  </button>
</div>

      </div>

      {/* Parte inferior */}
      <div className="bg-[#f8f8f8] text-black">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6">
            {/* Links esquerda */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
              <a href="#">About Company</a>
              <a href="#">Our Careers</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            {/* Links direita */}
            <div className="flex gap-6 text-sm font-medium">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          {/* Redes sociais e copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-600">
            <div className="flex gap-4 mb-4 md:mb-0 text-black" >
                <a href="#" className="">
                    <FaFacebookF />
                </a>
                <a href="#" className="">
                    <FaInstagram />
                </a>
                <a href="#" className="">
                    <FaTwitter />
                </a>
            </div>
            <p>Copyright © 2025 Nex. All Rights Reserved by Gabriel Santiago.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

