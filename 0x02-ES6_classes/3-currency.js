export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    this._code = c;  // Corrected this line
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

