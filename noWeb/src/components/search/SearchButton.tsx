
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton() {
  return (
    <button
      className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
      aria-label="Search"
    >
      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
    </button>

    
  );
}
