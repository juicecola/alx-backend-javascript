export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateAndSet('name', name, 'string');
    this._validateAndSet('length', length, 'number');
    this._validateAndSet('students', students, 'array');
  }

  _validateAndSet(property, value, type) {
    if (typeof value === type) {
      this[`_${property}`] = value;
    } else {
      throw new TypeError(`${property.charAt(0).toUpperCase() + property.slice(1)} must be a ${type}`);
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._validateAndSet('name', name, 'string');
  }

  set length(length) {
    this._validateAndSet('length', length, 'number');
  }

  set students(students) {
    this._validateAndSet('students', students, 'array');
  }
}

