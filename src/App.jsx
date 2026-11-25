import { StudentProvider } from './context/StudentContext';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    // Wrap component tree with StudentProvider so any child can useContext(StudentContext)
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
