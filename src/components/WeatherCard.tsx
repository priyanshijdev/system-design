import React from "react";

interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

const WeatherCard: React.FC<{ weather: Weather }> = ({ weather }) => {
  const { name, main, weather: details } = weather;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{details[0].description}</h3>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
