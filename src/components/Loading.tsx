import { Cloud, CloudRain } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <Cloud className="w-8 h-8 text-blue-500 animate-pulse mr-2" />
        <CloudRain className="w-10 h-10 text-blue-600 animate-bounce" />
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        Loading weather data...
      </p>
    </div>
  );
};

export default Loading;
