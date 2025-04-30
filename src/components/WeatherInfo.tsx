import {
  ChevronsDown,
  CloudRain,
  Droplets,
  Eye,
  Sunrise,
  Sunset,
  Wind,
} from "lucide-react";
import { useAppSelector } from "../redux/hooks";
import {
  formatDate,
  formatTemperature,
  formatTime,
  getWeatherIconUrl,
} from "../utils/formatters";

const WeatherInfo = () => {
  const { data } = useAppSelector((state) => state.weather);

  if (!data) return null;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-lg overflow-hidden transition-all duration-300">
      <div className="p-5 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {data.city}, {data.country}
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {formatDate(data.dt, data.timezone)}
            </p>
            <div className="mt-2 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {formatTemperature(data.temperature)}
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Feels like {formatTemperature(data.feelsLike)}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={getWeatherIconUrl(data.icon)}
              alt={data.description}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
            <p className="capitalize text-lg font-semibold text-gray-800 dark:text-white">
              {data.description}
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <Wind className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Wind
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.windSpeed} m/s
            </span>
          </div>

          <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <Droplets className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Humidity
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.humidity}%
            </span>
          </div>

          <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <CloudRain className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Pressure
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.pressure} hPa
            </span>
          </div>

          <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <Eye className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Visibility
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {(data.visibility / 1000).toFixed(1)} km
            </span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-lg">
          <div className="flex flex-wrap justify-around gap-4">
            <div className="flex items-center">
              <Sunrise className="w-5 h-5 text-amber-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sunrise
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {formatTime(data.sunrise, data.timezone)}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Sunset className="w-5 h-5 text-amber-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sunset
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {formatTime(data.sunset, data.timezone)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 p-2 text-center">
        <p className="text-xs text-white/80 flex items-center justify-center">
          <ChevronsDown className="w-4 h-4 mr-1 animate-bounce" />
          Weather information provided by OpenWeatherMap
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
