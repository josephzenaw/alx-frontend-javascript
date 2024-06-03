// 2-get_students_by_loc.js

function getStudentsByLocation(studentList, city) {
    return studentList.filter(student => student.location === city);
}

export default getStudentsByLocation;

