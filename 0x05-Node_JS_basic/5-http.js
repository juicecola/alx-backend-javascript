const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle root path
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  // Handle /students path
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1); // Remove the last newline character
        res.end(outString);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});

module.exports = app; // Export the server instance for external use

