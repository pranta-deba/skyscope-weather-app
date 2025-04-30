// * Theme :
export type TThemeMode = "light" | "dark";
export type TThemeState = {
  mode: TThemeMode;
};

// * Weather Data, Error, Search History :
export type TWeatherData = {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  description: string;
  icon: string;
  pressure: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  dt: number;
};
export type TWeatherError = {
  message: string;
};
export type TSearchHistoryItem = {
  city: string;
  country: string;
  timestamp: number;
};
