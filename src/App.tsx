import { useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { selectedTheme } from "./redux/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Loading from "./components/Loading";
import { addToHistory } from "./redux/features/searchHistory/searchHistorySlice";
import ErrorMessage from "./components/ErrorMessage";
import Welcome from "./components/Welcome";
import WeatherInfo from "./components/WeatherInfo";
import { getWeatherBackgroundClass } from "./utils/formatters";

const App = () => {
  const mode = useAppSelector(selectedTheme);
  const { data } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  // * theme
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // * Add to search history
  useEffect(() => {
    if (data) {
      dispatch(
        addToHistory({
          city: data.city,
          country: data.country,
        })
      );
    }
  }, [data, dispatch]);

  //*  background class based weather condition
  const backgroundClass = data
    ? getWeatherBackgroundClass(data.condition)
    : "bg-gradient-to-br from-blue-100 to-blue-200";

  return (
    <div
      className={`min-h-screen ${backgroundClass} transition-colors duration-500 dark:bg-gray-800 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="min-h-screen backdrop-blur-sm dark:bg-black/30 transition-colors duration-500">
        <Header />

        <main className="min-h-[calc(100vh-119.944px)] max-w-6xl mx-auto px-4 py-6 space-y-5">
          <SearchBar />
          <ErrorMessage />
          <Loading />
          <Welcome />
          <WeatherInfo />
        </main>

        <footer
          className="py-4 px-6 text-center 
        text-black dark:text-white
        text-sm"
        >
          <p>
            © {new Date().getFullYear()} SkyScope | Copyright © - All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
