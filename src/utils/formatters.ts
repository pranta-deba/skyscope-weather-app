export const formatTemperature = (temp: number, unit = "C"): string => {
  return `${Math.round(temp)}°${unit}`;
};

export const formatDate = (timestamp: number, timezone: number): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (timestamp: number, timezone: number): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getWeatherBackgroundClass = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-blue-400 to-blue-500";
    case "clouds":
      return "bg-gradient-to-br from-gray-300 to-gray-400";
    case "rain":
    case "drizzle":
      return "bg-gradient-to-br from-gray-400 to-blue-600";
    case "thunderstorm":
      return "bg-gradient-to-br from-gray-600 to-gray-800";
    case "snow":
      return "bg-gradient-to-br from-blue-100 to-blue-200";
    case "mist":
    case "fog":
    case "haze":
      return "bg-gradient-to-br from-gray-300 to-gray-500";
    default:
      return "bg-gradient-to-br from-blue-300 to-blue-500";
  }
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
};
