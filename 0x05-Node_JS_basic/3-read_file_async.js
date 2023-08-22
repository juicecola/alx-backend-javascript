const { readFile } = require('fs');

// Function to count students and their fields from a CSV file
function countStudents(fileName) {
  const students = {}; // Object to store students by their fields
  const fields = {};   // Object to store field counts
  let length = 0;      // Total number of lines (students) in the file

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database')); // Reject the promise on error
      } else {
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
        console.log(`Number of students: ${l}`);

        // Loop through fields object and display field-wise student counts
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Ignore the header
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data); // Resolve the promise with the file data
      }
    });
  });
}

module.exports = countStudents; // Export the function for use in other modules
