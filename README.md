# Student Records (React + Context API)

A clean demonstration of React's Context API to manage shared state across independent components without prop drilling.

## What this Project Does
- Implements a central `StudentContext` with a `StudentProvider` managing:
  - `students`: array of student objects (`id`, `name`, `rollNo`, `department`)
  - `addStudent`: function to register a new student
  - `removeStudent`: function to remove a student by `id`
- Features a `StudentForm` component with inputs for name, roll number, and department that dispatches `addStudent`.
- Features a `StudentList` component that consumes the context via `useContext(StudentContext)` and renders records with delete actions.

---

## Step-by-Step Commands (From Scratch)

### 1. Create project from an empty folder
```bash
npm create vite@latest student-records-context -- --template react
cd student-records-context
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The app will run on: **`http://localhost:5173`**.

---

## Required Ports & Services
- **Port:** `5173` (Vite dev server)
- **Database:** None (in-memory React Context state)

---

## File-by-File Implementation Notes

| File | Purpose & Requirements Covered |
| :--- | :--- |
| `src/context/StudentContext.jsx` | - Creates context: `export const StudentContext = createContext()`<br>- Implements `StudentProvider` with state `students`<br>- Exposes `addStudent` and `removeStudent` helper methods via `<StudentContext.Provider value={{ students, addStudent, removeStudent }}>` |
| `src/components/StudentForm.jsx` | Form with fields: `name`, `rollNo`, and `department`. Consumes `{ addStudent } = useContext(StudentContext)` and invokes it on submit |
| `src/components/StudentList.jsx` | Consumes `{ students, removeStudent } = useContext(StudentContext)` to render the list of enrolled students with a **Remove** button |
| `src/App.jsx` | Wraps the view within `<StudentProvider>` so nested components have context access |
| `src/index.css` | Simple, modern styling for forms, student cards, and badges |
| `src/main.jsx` | Mounts the `<App />` component into the DOM |
| `vite.config.js` | Configures the Vite React plugin |
| `package.json` | Dependencies and scripts |
