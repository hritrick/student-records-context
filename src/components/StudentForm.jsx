import { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

export default function StudentForm() {
  const { addStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.rollNo.trim() || !formData.department.trim()) {
      return;
    }

    addStudent(formData);
    setFormData({ name: '', rollNo: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h3>Add New Student</h3>
      
      <div className="form-group">
        <label htmlFor="name">Student Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rollNo">Roll Number:</label>
        <input
          id="rollNo"
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          placeholder="e.g. CS305"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="department">Department:</label>
        <input
          id="department"
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="e.g. Information Technology"
          required
        />
      </div>

      <button type="submit">Add Student Record</button>
    </form>
  );
}
