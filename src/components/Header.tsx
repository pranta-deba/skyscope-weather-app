import { CloudSun, History } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import HistoryList from "./HistoryList";

const Header = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudSun className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white select-none">
            Sky<span className="text-blue-500">Scope</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
          >
            <History className="w-5 h-5" />
          </button>

          <ThemeToggle />
        </div>
      </div>

      <HistoryList
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </header>
  );
};

export default Header;
