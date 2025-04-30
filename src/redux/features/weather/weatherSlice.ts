import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWeatherData, TWeatherState } from "../../../types";
import { RootState } from "../../store";

const initialState: TWeatherState = {
  data: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<TWeatherData>) => {
      state.data = action.payload;
    },
    clearWeather: (state) => {
      state.data = null;
    },
  },
});

export const selectedWeather = (state: RootState) => state.weather.data;
export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
