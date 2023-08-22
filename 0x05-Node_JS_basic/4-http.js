const http = require('http');

const host = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the response's content type
  res.end('Hello Holberton School!'); // Send the response body
});

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

module.exports = app; // Export the server instance for external use

