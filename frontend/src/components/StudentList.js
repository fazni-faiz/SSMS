// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.age} years, {student.grade})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
