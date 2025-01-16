import React, { useState } from 'react';
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    const API_KEY = '488ca115418ccafc6ebc254a5393fdde';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default App;