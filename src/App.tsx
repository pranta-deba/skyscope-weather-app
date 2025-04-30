import { useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { selectedTheme } from "./redux/features/theme/themeSlice";
import { useAppSelector } from "./redux/hooks";
import { useFetchWeatherDataQuery } from "./redux/api/baseApi";
import Loading from "./components/Loading";

const App = () => {
  const mode = useAppSelector(selectedTheme);
  const { data, isLoading } = useFetchWeatherDataQuery("dhaka");

  console.log(data, isLoading);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div
      className={`min-h-screen  transition-colors duration-500 dark:bg-gray-800 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="min-h-screen backdrop-blur-sm dark:bg-black/30 transition-colors duration-500">
        <Header />

        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="mb-6">
            <SearchBar />
          </div>
          <Loading />
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
