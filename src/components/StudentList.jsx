import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

export default function StudentList() {
  // Consume students array and removeStudent handler via useContext
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <div className="student-list-container">
      <h3>Enrolled Students ({students.length})</h3>

      {students.length === 0 ? (
        <p className="empty-text">No student records found.</p>
      ) : (
        <ul className="student-list">
          {students.map((student) => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <strong>{student.name}</strong>
                <span className="badge">Roll: {student.rollNo}</span>
                <span className="dept-text">{student.department}</span>
              </div>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeStudent(student.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
