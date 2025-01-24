//Do not modilfy any code below this line
// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import functions from script.js
const { serveIndexFile, handleRegisterRoute } = require('./js/serverside');

// Middleware to serve static files from 'css' and 'js' directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.json());

// Route to serve the main `index.html` file
app.get('/', serveIndexFile);

// Register route with simple validation
app.post('/register', handleRegisterRoute);

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
