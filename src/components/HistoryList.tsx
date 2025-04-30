import { Clock, Trash2, X } from "lucide-react";
import {
  clearHistory,
  removeFromHistory,
} from "../redux/features/searchHistory/searchHistorySlice";
import { fetchWeather } from "../redux/features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface IHistoryListProps {
  isOpen: boolean;
  onClose: () => void;
}

const HistoryList = ({ isOpen, onClose }: IHistoryListProps) => {
  const dispatch = useAppDispatch();
  const { searchHistory } = useAppSelector((state) => state.history);

  if (!isOpen) return null;

  const handleSearch = (city: string) => {
    dispatch(fetchWeather(city));
    onClose();
  };

  const handleRemove = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeFromHistory(index));
  };

  const handleClearAll = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
            <Clock className="w-5 h-5 mr-2" /> Search History
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-80 overflow-y-auto">
          {searchHistory.length === 0 ? (
            <p className="text-center py-4 text-gray-500 dark:text-gray-400">
              No search history yet
            </p>
          ) : (
            <ul className="space-y-2">
              {searchHistory.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSearch(item.city)}
                  className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">
                      {item.city}, {item.country}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(item.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleRemove(index, e)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchHistory.length > 0 && (
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-center">
            <button
              onClick={handleClearAll}
              className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium cursor-pointer"
            >
              Clear All History
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryList;
