import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const [mode, setMode] = useState("light");

  return (
    <button
      onClick={() => {
        if (mode === "light") setMode("dark");
        else setMode("light");
      }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
    >
      {mode === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
