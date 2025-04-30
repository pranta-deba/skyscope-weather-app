import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { THistoryState, TSearchHistoryItem } from "../../../types";

const initialState: THistoryState = {
  searchHistory: [],
};

const MAX_HISTORY_ITEMS = 10;

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (
      state,
      action: PayloadAction<{ city: string; country: string }>
    ) => {
      const { city, country } = action.payload;
      const newItem: TSearchHistoryItem = {
        city,
        country,
        timestamp: Date.now(),
      };

      //* Remove if already exists
      state.searchHistory = state.searchHistory.filter(
        (item) =>
          !(
            item.city.toLowerCase() === city.toLowerCase() &&
            item.country.toLowerCase() === country.toLowerCase()
          )
      );

      //* Add new item at the starting place
      state.searchHistory.unshift(newItem);

      //*  Limit 10
      if (state.searchHistory.length > MAX_HISTORY_ITEMS) {
        state.searchHistory = state.searchHistory.slice(0, MAX_HISTORY_ITEMS);
      }
    },

    clearHistory: (state) => {
      state.searchHistory = [];
    },

    removeFromHistory: (state, action: PayloadAction<number>) => {
      const filteredHistory = state.searchHistory.filter(
        (_, index) => index !== action.payload
      );
      state.searchHistory = filteredHistory;
    },
  },
});

export const { addToHistory, clearHistory, removeFromHistory } =
  historySlice.actions;
export default historySlice.reducer;
