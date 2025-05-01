import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import weatherReducer from "./features/weather/weatherSlice";
import historyReducer from "./features/searchHistory/searchHistorySlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

//* Persist config for theme
const themePersistConfig = {
  key: "theme",
  storage,
};

//* Persist config for history
const historyPersistConfig = {
  key: "history",
  storage,
};

//* Apply redux-persist to the theme and history reducers
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedHistoryReducer = persistReducer(
  historyPersistConfig,
  historyReducer
);

//* Configure the Redux store
export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    weather: weatherReducer, //! (not persisted)
    history: persistedHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //* Ignore these action types from serializability checks.  These are redux-persist actions.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//* Create a persistor object.  This enables the store to save and load persisted state.
export const persistor = persistStore(store);

//* Define the RootState type, which is the type of the entire Redux state.
export type RootState = ReturnType<typeof store.getState>;

//* Define the AppDispatch type, which is the type of the store's dispatch function.
export type AppDispatch = typeof store.dispatch;
