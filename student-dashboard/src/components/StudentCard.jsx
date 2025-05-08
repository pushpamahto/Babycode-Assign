function StudentCard({ student }) {
    return (
      <div className="student-card">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>Course: {student.course}</p>
        <p>Age: {student.age}</p>
      </div>
    );
  }
  
  export default StudentCard;