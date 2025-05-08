import { useState, useEffect } from 'react';
import axios from '../mockApi';
import StudentCard from './StudentCard';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/students');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchFilteredStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/students?course=${filter}`);
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (filter) {
      fetchFilteredStudents();
    } else {
      axios.get('/students').then(response => {
        setStudents(response.data);
      });
    }
  }, [filter]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="student-list">
      <div className="filter-controls">
        <label htmlFor="course-filter">Filter by Course:</label>
        <input
          id="course-filter"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Enter course name"
        />
      </div>
      
      <div className="students-grid">
        {students.length > 0 ? (
          students.map(student => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;