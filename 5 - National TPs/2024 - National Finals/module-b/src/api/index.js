const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Support environment variables
dotenv.config();

const apiRouter = require('./routes/api');
const { DEFAULT_PORT, DEFAULT_BASE_URL } = require('./common/constants');

const app = express();

const port = process.env.PORT || DEFAULT_PORT;
const baseUrl = process.env.BASE_URL || DEFAULT_BASE_URL;

// Enable CORS
app.use(cors());

// Register API routes
app.use('/api', apiRouter);

// Start the server
app.listen(port, () => {
  if (port !== DEFAULT_PORT) {
    console.warn(`[API] Non-default port used: ${port}`);
  }

  if (baseUrl !== DEFAULT_BASE_URL) {
    console.warn(`[API] Non-default base URL used: ${baseUrl}`);
  }

  console.log(`[API] Server is running on ${baseUrl}:${port}`);
});
