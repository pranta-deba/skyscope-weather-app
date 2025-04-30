import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="min-h-screen backdrop-blur-sm dark:bg-black/30 transition-colors duration-500">
        <Header />

        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="mb-6">
            <SearchBar />
          </div>
        </main>

        <footer
          className="py-4 px-6 text-center 
        text-black
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
