import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getWeather = async () => {
  try {
    // Fetch random city details first (lat, lon, city name)
    const randomCityData = await getRandomCity();
    console.log("Random city data:", randomCityData);

    const response = await axios.get(`${API_URL}/weather?lat=${randomCityData.lat}&lon=${randomCityData.lon}`);
    console.log("Weather data:", response.data);

    //Return both weather and city data
    return{
      city: randomCityData.city, //City name
      weather: response.data, //Weather data
      flagUrl: randomCityData.flagUrl, // Flag of the country
      isoAlpha2: randomCityData.isoAlpha2//ISO naming of the country
    } 
      }
      catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
      }
    };

// Function to fetch a random city from the backend
const getRandomCity = async () => {
  try {
    const response = await axios.get(`${API_URL}/city/random`);
    return response.data; // { city, lat, lon,flag, isoAlpha2}
  } catch (error) {
    console.error('Error fetching random city:', error);
    throw new Error('Failed to fetch random city data');
  }
};
