import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_FETCH_URL,
  }),
  tagTypes: ["weather"],
  endpoints: (builder) => {
    return {
      fetchWeatherData: builder.query({
        query: (city) => {
          return {
            url: `/weather?q=${city}&appid=${import.meta.env.VITE_API}`,
            method: "GET",
          };
        },
        transformResponse: (data) => {
          return {
            city: data?.name,
            country: data?.sys.country,
            temperature: data?.main.temp,
            feelsLike: data?.main.feels_like,
            humidity: data?.main.humidity,
            windSpeed: data?.wind.speed,
            condition: data?.weather[0].main,
            description: data?.weather[0].description,
            icon: data?.weather[0].icon,
            pressure: data?.main.pressure,
            visibility: data?.visibility,
            sunrise: data?.sys.sunrise,
            sunset: data?.sys.sunset,
            timezone: data?.timezone,
            dt: data?.dt,
          };
        },
        providesTags: ["weather"],
      }),
    };
  },
});

export const { useFetchWeatherDataQuery } = baseApi;
