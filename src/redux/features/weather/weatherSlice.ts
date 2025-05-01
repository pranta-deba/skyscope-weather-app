import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWeatherData, TWeatherError, TWeatherState } from "../../../types";
import { fetchWeatherData } from "../../../utils/api";

const initialState: TWeatherState = {
  data: null,
  loading: false,
  error: null,
};

//* Async thunk to fetch weather data for a given city
export const fetchWeather = createAsyncThunk<
  TWeatherData,
  string,
  { rejectValue: TWeatherError }
>("weather/loadCityWeather", async (city, { rejectWithValue }) => {
  try {
    return await fetchWeatherData(city);
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
    return rejectWithValue({ message: "An unknown error occurred" });
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    //* Reducer to clear weather data and error
    clearWeatherData: (state) => {
      state.data = null;
      state.error = null;
    },
    //* Reducer to clear the error state
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchWeather.pending, (state) => { //* Handle pending state of fetchWeather
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<TWeatherData>) => { //* Handle fulfilled state of fetchWeather
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {  //* Handle rejected state of fetchWeather
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch weather data";
      });
  },
});

export const { clearWeatherData, clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
