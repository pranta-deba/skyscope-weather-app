import { createSlice } from "@reduxjs/toolkit";
import { TThemeState } from "../../../types";
import { RootState } from "../../store";

const initialState: TThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const selectedTheme = (state: RootState) => state.theme.mode;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
