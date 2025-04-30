import { CloudSun, History, Moon, Search } from "lucide-react";
import { useAppSelector } from "../redux/hooks";

const Welcome = () => {
  const { data } = useAppSelector((state) => state.weather);
  if (data) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-12 p-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-center">
      <CloudSun className="w-16 h-16 text-blue-500 mx-auto mb-4" />

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        Welcome to SkyScope
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Get real-time weather information for any city around the world
      </p>

      <div className="space-y-4 mt-8">
        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800 dark:text-white">
              Search Any City
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Type a city name in the search bar above and press Enter
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
            <History className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800 dark:text-white">
              View Search History
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access your previous searches from the history button
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
            <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800 dark:text-white">
              Toggle Dark Mode
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Switch between light and dark themes for comfortable viewing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
