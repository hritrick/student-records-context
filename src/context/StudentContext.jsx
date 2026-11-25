import { createContext, useState } from 'react';

// 1. Create Student Context
export const StudentContext = createContext();

// 2. Student Provider holding students array, addStudent, and removeStudent
export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Smith', rollNo: 'CS101', department: 'Computer Science' },
    { id: 2, name: 'Bob Jones', rollNo: 'EC202', department: 'Electronics' },
  ]);

  // Function to add a student to the records array
  const addStudent = (studentData) => {
    const newStudent = {
      id: Date.now(),
      ...studentData,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  // Function to remove a student by ID
  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
