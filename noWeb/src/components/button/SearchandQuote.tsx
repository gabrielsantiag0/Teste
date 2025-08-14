import { IoMdArrowRoundUp } from "react-icons/io";
import '../../App.css'
import './SearchandQuote.css';

export default function SearchandQuote() {
  return (
    <div className="w-full">
      <button
        className="button-color hover:text-white text-black font-medium
         px-5 py-2 rounded flex items-center gap-1"
      >
        <span className="font-dm text-base font-bold">Get a Quote</span>
        <IoMdArrowRoundUp  className="w-4 h-4 flex justify-center transform transition-transform duration-600 scale-x-[-1] -rotate-320" />
      </button>
    </div>
  );
}
