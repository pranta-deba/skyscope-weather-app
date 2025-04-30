import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWeatherData, TWeatherError, TWeatherState } from "../../../types";
import { RootState } from "../../store";
import { fetchWeatherData } from "../../../utils/api";

const initialState: TWeatherState = {
  data: null,
  loading: false,
  error: null,
};

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
    clearWeatherData: (state) => {
      state.data = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<TWeatherData>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch weather data";
      });
  },
});

export const selectedWeather = (state: RootState) => state.weather.data;
export const selectedLoading = (state: RootState) => state.weather.loading;
export const selectedError = (state: RootState) => state.weather.loading;
export const { clearWeatherData, clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
