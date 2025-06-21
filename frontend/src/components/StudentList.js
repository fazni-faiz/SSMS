// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch students from API
  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:8000/api/students/');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await axios.delete(`http://localhost:8000/api/students/${id}/`);
      fetchStudents(); // Refresh list
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <button onClick={() => navigate('/add')}>➕ Add Student</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> | {student.email} | Age: {student.age} | Grade: {student.grade}
            &nbsp;
            <button onClick={() => navigate(`/edit/${student.id}`)}>✏️ Edit</button>
            &nbsp;
            <button onClick={() => handleDelete(student.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
