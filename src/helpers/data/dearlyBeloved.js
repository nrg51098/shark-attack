import studentsData from './studentsData';

const students = studentsData.getAllStudents();

const dearlyBeloved = () => (
  students.filter((student) => student.isDead === true));

export default { dearlyBeloved };
