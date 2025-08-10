import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function SearchandQuote() {
  return (
    <div className="w-full">
      <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded flex items-center gap-2">
        <span>Get a Quote</span>
        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
