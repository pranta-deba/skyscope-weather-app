// * Theme and theme state:
export type TThemeMode = "light" | "dark";
export type TThemeState = {
  mode: TThemeMode;
};

// * Weather Data ans weather state:
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
export type TWeatherState = {
  data: TWeatherData | null;
};

// * Search history and search history state
export type TSearchHistoryItem = {
  city: string;
  country: string;
  timestamp: number;
};
export type THistoryState = {
  searchHistory: TSearchHistoryItem[];
};
