import { createContext, useState } from 'react';

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Smith', rollNo: 'CS101', department: 'Computer Science' },
    { id: 2, name: 'Bob Jones', rollNo: 'EC202', department: 'Electronics' },
  ]);

  const addStudent = (studentData) => {
    const newStudent = {
      id: Date.now(),
      ...studentData,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
