import React, { useState } from 'react';
import CurrentWeather from './CurrentWeather';

const AppContent = () => {
  const [lat] = useState(35);  // Sample latitude
  const [lon] = useState(139); // Sample longitude

  return (
    <div className="app-content">
      <h1>HYperCast Weather Forecast</h1>
      <CurrentWeather lat={lat} lon={lon} />
    </div>
  );
};

export default AppContent;
