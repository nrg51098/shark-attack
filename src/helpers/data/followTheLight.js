import studentsData from './studentsData';

const students = studentsData.getAllStudents;

const followTheLight = (studentId) => {
  const foundStudent = students.findIndex((student) => student.id === studentId);
  students[foundStudent].isDead = false;
};

export default { followTheLight };
