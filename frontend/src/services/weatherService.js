import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather';

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
