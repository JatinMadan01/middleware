const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Use the logger middleware
app.use(logger);

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
