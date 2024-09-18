const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
//const userRoutes = require('./routes/userRoutes');
//const cityRoutes = require('./routes/cityRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/weather', require('./routes/weatherRoutes'));
app.use('/api/city', require ('./routes/cityRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
