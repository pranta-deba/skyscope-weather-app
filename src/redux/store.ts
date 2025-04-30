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

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedHistoryReducer = persistReducer(
  historyPersistConfig,
  historyReducer
);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    weather: weatherReducer,
    history: persistedHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
