import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherService';

const CurrentWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(lat, lon);
        setWeather(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
