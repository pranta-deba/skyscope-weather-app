import Header from "./components/Header";

const App = () => {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="min-h-screen backdrop-blur-sm dark:bg-black/30 transition-colors duration-500">
        <Header />
      </div>
    </div>
  );
};

export default App;
