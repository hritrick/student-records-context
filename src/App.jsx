import { StudentProvider } from './context/StudentContext';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <StudentProvider>
      <div className="container">
        <h2>Student Records Management</h2>
        <p className="subtitle">State managed globally using React Context API</p>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;
