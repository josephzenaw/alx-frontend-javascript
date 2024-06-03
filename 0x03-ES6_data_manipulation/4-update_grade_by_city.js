// 4-update_grade_by_city.js

function updateStudentGradeByCity(studentList, city, newGrades) {
    return studentList
        .filter(student => student.location === city)
        .map(student => {
            const foundGrade = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: foundGrade ? foundGrade.grade : 'N/A'
            };
        });
}

export default updateStudentGradeByCity;

