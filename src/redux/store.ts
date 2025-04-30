import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import weatherReducer from "./features/weather/weatherSlice";
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
import { baseApi } from "./api/baseApi";

//* Persist config for theme
const themePersistConfig = {
  key: "theme",
  storage,
};

//* Persist config for weather
const weatherPersistConfig = {
  key: "weather",
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedWeatherReducer = persistReducer(
  weatherPersistConfig,
  weatherReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme: persistedThemeReducer,
    weather: persistedWeatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
