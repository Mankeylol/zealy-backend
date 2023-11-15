// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5001; // Choose a port for your server

// Enable CORS for all routes
app.use(cors());

// API endpoint to fetch data from external API
app.get('/api/leaderboard', async (req, res) => {
  try {
    const response = await axios.get('https://api.zealy.io/communities/idklmao/leaderboard', {
      headers: {
        'x-api-key': '129f6dAgfoJBzk-XX1NskvpCe-H',
      },
      params: {
        page: 0,
        limit: 50,
      },
    });
    const data = response.data;
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(error.response?.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
