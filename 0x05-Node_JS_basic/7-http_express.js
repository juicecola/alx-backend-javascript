const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

// Function to count students and their fields from a CSV file
function countStudents(fileName) {
  const students = {}; // Object to store students by their fields
  const fields = {};   // Object to store field counts
  let length = 0;      // Total number of lines (students) in the file

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // Reject the promise on error
      } else {
        let output = '';
        const lines = data.toString().split('\n'); // Split content into lines
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) { // Ignore empty lines
            length += 1;
            const field = lines[i].toString().split(','); // Split line into fields

            // Update students object with student's name under the corresponding field
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Update fields object with count of students in each field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1; // Subtracting one to exclude header
        output += `Number of students: ${l}\n`;

        // Loop through fields object and add field-wise student counts to the output
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Ignore the header
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output); // Resolve the promise with the output string
      }
    });
  });
}

// Define a route for the root path ('/') that responds with a message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' path that displays student information
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the Express application instance for external use

