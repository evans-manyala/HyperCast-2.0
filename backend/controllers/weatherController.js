const axios = require('axios');

// @desc    Fetch weather data
// @route   GET /api/weather
// @access  Public (but can add JWT auth if needed)
exports.getWeather = async (req, res) => {
  const { lat, lon } = req.query;
  const weatherApiKey= process.env.WEATHER_API_KEY;
  //const locationApiKey = process.env.OPENCAGE_API_KEY;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};
