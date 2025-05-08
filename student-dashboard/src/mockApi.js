import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

let students = [
  { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science', age: 20 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Mathematics', age: 22 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Physics', age: 21 },
  { id: 4, name: 'Lily', email: 'lily@example.com', course: 'Computer Science', age: 20 },
  { id: 5, name: 'Anjali', email: 'anjali@example.com', course: 'Mathematics', age: 22 },
  { id: 6, name: 'Golu', email: 'golu@example.com', course: 'Physics', age: 21 },
  { id: 7, name: 'Juli', email: 'juli@example.com', course: 'Computer Science', age: 20 },
  { id: 8, name: 'Ani', email: 'ani@example.com', course: 'Mathematics', age: 22 },
  { id: 9, name: 'Boby', email: 'boby@example.com', course: 'Physics', age: 21 },
];

// Mock GET /students
mock.onGet('/students').reply(200, students);

// Mock POST /students
mock.onPost('/students').reply((config) => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [201, newStudent];
});

// Mock GET /students?course=:course
mock.onGet(/\/students\?course=/).reply((config) => {
  const course = config.url.split('=')[1];
  const filteredStudents = students.filter(student => 
    student.course.toLowerCase().includes(course.toLowerCase())
  );
  return [200, filteredStudents];
});

export default axios;