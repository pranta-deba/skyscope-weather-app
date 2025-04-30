import { AlertTriangle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearError } from "../redux/features/weather/weatherSlice";

const ErrorMessage = () => {
  const { error } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  if (!error) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200 flex items-start">
      <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-medium">{error}</p>
        <p className="text-sm mt-1">
          Please check the city name and try again.
        </p>
      </div>
      <button
        onClick={() => dispatch(clearError())}
        className="ml-2 text-red-500 dark:text-red-300 hover:text-red-700 dark:hover:text-red-100"
      >
        Dismiss
      </button>
    </div>
  );
};

export default ErrorMessage;
