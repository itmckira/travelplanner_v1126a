const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Load env vars
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/travel-records', require('./routes/travelRecords'));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Travel Planner API',
    version: '1.0.0',
    endpoints: {
      travelRecords: '/api/travel-records'
    }
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Server Error'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
