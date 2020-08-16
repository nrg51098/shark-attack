import studentsData from './studentsData';

const students = studentsData.getAllStudents();

const feedTheShark = (studentId) => {
  students.forEach((response) => { // eslint wants this to be 'response'
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default { feedTheShark };
