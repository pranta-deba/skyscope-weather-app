import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWeatherData, TWeatherState } from "../../../types";

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
  },
});

export const { setWeather } = weatherSlice.actions;
