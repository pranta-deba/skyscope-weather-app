import { Search, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchWeather } from "../redux/features/weather/weatherSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchHistory } = useAppSelector((state) => state.history);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchWeather(query.trim()));
      setQuery("");
      setShowHistory(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleHistoryItemClick = (city: string) => {
    dispatch(fetchWeather(city));
    setShowHistory(false);
    setQuery("");
  };

  useEffect(() => {
    setShowHistory(isInputFocused && searchHistory.length > 0);
  }, [isInputFocused, searchHistory.length]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
            placeholder="Search city..."
            className="w-full px-4 py-3 pl-10 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
            disabled={!query.trim()}
          >
            Search
          </button>
        </div>
      </form>

      {/* Search History Dropdown */}
      {showHistory && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
          <ul className="py-1">
            {searchHistory.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleHistoryItemClick(item.city)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-between"
                >
                  <span className="text-gray-800 dark:text-gray-200">
                    {item.city}, {item.country}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
