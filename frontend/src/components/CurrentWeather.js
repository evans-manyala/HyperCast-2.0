import React, { useState, useEffect, useMemo } from 'react';
import { getWeather } from '../services/weatherService';
import './CurrentWeather.css';

// Function to calculate local time based on timezone offset
const calculateLocalTime = (timezoneOffset) => {
  const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000; // Calculate UTC time
  const localTime = new Date(utcTime + timezoneOffset * 1000); // Adjust for the timezone offset
  return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format local time
};
// Function to convert ISO Alpha-2 country code to flag emoji
const getFlagEmoji = (countryCode) => {
  return countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
};

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [cityInfo, setCityInfo] = useState({ city: '', flag: '', isoAlpha2: '' });


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { city, weather, isoAlpha2 } = await getWeather();
        setCityInfo({ city, flag: getFlagEmoji(isoAlpha2), isoAlpha2 }); // Set the random City name, flag, ISO Alpha data*/
        setWeather(weather);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, []);

  // Memoize the icon URL to avoid unnecessary recalculations
  const iconUrl = useMemo(() => {
    if (!weather) return null; // Return null if weather data is not available
    return `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`; // Generate icon URL
  }, [weather]);

  // Memoize the local time to avoid unnecessary recalculations
  const localTime = useMemo(() => {
    if (!weather) return null; // Return null if weather data is not available
    return calculateLocalTime(weather.timezone); // Calculate local time based on timezone offset
  }, [weather]);

  if (error) return <p>{error}</p>;
  if (!weather || !cityInfo.city) return <p>Loading...</p>;

  // Render the current weather information
  return (
<div className="current-weather">
      <div className="current-weather-card">
        <h2>Current Weather</h2>
        <p>Country: {cityInfo.isoAlpha2}</p>
        <img src={cityInfo.flag} alt={`${cityInfo.city} Flag`} style={{ width: '50px', height: '30px' }} />
        <img 
          src={iconUrl} 
          alt={weather?.weather[0].description} 
          onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/Error.png'; }} // Fallback image on error
        />
        <div className="current-weather-details">
          <div>
            <span>{weather.main.temp}°C</span>
            <span>Temp</span>
          </div>
          <div>
            <span>{weather.main.humidity}%</span>
            <span>Humidity</span>
          </div>
          <div>
            <span>{weather.wind.speed} m/s</span>
            <span>Wind Speed</span>
          </div>
          <div>
            <span>{weather.main.pressure} hPa</span>
            <span>Pressure</span>
          </div>
          <div>
            <span>{localTime}</span>
            <span>Local Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
