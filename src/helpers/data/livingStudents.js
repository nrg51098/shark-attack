import studentsData from './studentsData';

const students = studentsData.getAllStudents();

const livingStudents = () => (
  students.filter((student) => student.isDead === false));

export default { livingStudents };
