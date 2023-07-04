function cleanSet(set, startString) {
  const valuesArray = Array.from(set);
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.substring(startString.length)).join('-');
  return cleanedString;
}

export default cleanSet;

