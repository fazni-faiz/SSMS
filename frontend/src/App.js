// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Student List</Link> | <Link to="/add">Add Student</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
// This is the main application component that sets up routing for the student list and form.
// It uses React Router to navigate between the student list and the form for adding new students.
// The `StudentList` component displays a list of students fetched from the backend,
// while the `StudentForm` component allows users to add a new student by submitting a form.
// The `Link` components provide navigation links to switch between the two views.
// The `BrowserRouter` component wraps the entire application to enable routing functionality.
// The `Routes` component defines the different routes in the application, mapping paths to their respective components.
// The `Route` components specify which component to render for each path.
// The `App` component serves as the entry point for the React application, rendering the navigation and routes.
// This code is a simple React application that allows users to view a list of students and add new students through a form.
// It uses React Router for navigation and Axios for making HTTP requests to the backend API.
// The application is structured to provide a clean and user-friendly interface for managing student data.
// The `App` component is the main entry point of the React application.
// It imports necessary components and sets up routing for the application.
// The `BrowserRouter` component is used to enable routing in the application.
// The `nav` element contains links to navigate between the student list and the form for adding new students.
// The `Routes` component defines the different routes in the application, mapping paths to their respective components.
// The `Route` components specify which component to render for each path.
// The `StudentList` component displays a list of students fetched from the backend API.
// The `StudentForm` component allows users to add a new student by submitting a form.
// The `Link` components provide navigation links to switch between the two views.