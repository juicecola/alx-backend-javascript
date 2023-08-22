const express = require('express');

const app = express(); // Create an Express application
const port = 1245;

// Define a route for the root path ('/') that responds with a message
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the Express application instance for external use
