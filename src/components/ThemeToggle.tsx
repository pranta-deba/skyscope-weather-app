import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectedTheme, toggleTheme } from "../redux/features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectedTheme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
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
