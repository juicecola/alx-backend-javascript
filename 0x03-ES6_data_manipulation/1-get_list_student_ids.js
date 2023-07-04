import getListStudents from "./0-get_list_students.js";

function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map(student => student.id);
}

export default getListStudentIds;

