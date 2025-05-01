# Sky Scope - Weather Application

## Overview

Sky Scope is a web application that allows users to search for a city and view its current weather conditions. It's built using React.js, and Redux for state management.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
<img src="https://i.ibb.co.com/kVYjnVyZ/Screenshot-2025-05-01-071109.png" alt="Weather App Screenshot 1" style="width: 100%; max-width: none;">
<img src="https://i.ibb.co.com/fVNkDtqN/Screenshot-2025-05-01-071333.png" alt="Weather App Screenshot 4" style="width: 100%; max-width: none;">
</div>

**Live Demo:** [here](https://sky-scope-ashy.vercel.app/)

## Features

- **Search:** Users can enter a city name to search for its weather.
- **Display:** The app shows the temperature and weather condition (e.g., sunny, cloudy, rainy) for the searched city.
- **Responsive Design:** The layout is mobile-friendly.
- **State Management:** Redux is used to manage the application's state.
- **Asynchronous Data Fetching**: Uses `createAsyncThunk` to fetch data and handle loading/error states.
- **Redux Persist:** Stores searched cities, using `redux-persist`.
- **Dark Mode:** Has a dark mode toggle.

## Tech Used

- React.js
- Redux Toolkit
- Redux Persist
- Tailwind CSS
- TypeScript
- lucide-react icons
- OpenWeatherMap API

## Author

Pranta Deba
