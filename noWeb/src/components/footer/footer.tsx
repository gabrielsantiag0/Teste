import '../../App.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-16 text-center md:text-left gap-10 md:gap-0">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gallery leading-tight">
            Let's Create <br /> Something Great
          </h1>
          <p className="mt-4 text-sm sm:text-base font-dm text-gray-400 max-w-md mx-auto md:mx-0">
            We Shift You From Today's Reality To Tomorrow’s Potential, Ensuring
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="w-28 h-28 sm:w-32 sm:h-32 bg-lime-400 text-black font-semibold font-dm text-sm rounded-full shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Let’s Talk
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#1f1f1f">
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-[#f8f8f8] text-black">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6 font-dm text-sm font-medium text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="#">About Company</a>
              <a href="#">Our Careers</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-600 gap-4 text-center md:text-left">
            <div className="flex gap-4 justify-center md:justify-start text-black">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaBehance /></a>
            </div>
            <p className="text-sm text-gray-950">
              Copyright © 2025 Nex. All Rights Reserved by Gabriel Santiago.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
