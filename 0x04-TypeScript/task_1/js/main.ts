// Define the StudentInterface interface
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Define the ClassInterface interface
interface ClassInterface {
  workOnHomework: () => string;
  displayName: () => string;
}

// Create a student object using object literal notation
const student1: StudentInterface = {
  firstName: 'John',
  lastName: 'Doe',
};

// Implement the StudentClass class using arrow function syntax
const StudentClass: ClassInterface = {
  workOnHomework: () => 'Currently working',
  displayName: () => student1.firstName,
};

// Test the methods of the StudentClass
console.log(StudentClass.workOnHomework()); // Currently working
console.log(StudentClass.displayName()); // John

