// src/components/StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    grade: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/students/', formData)
      .then(res => {
        alert('Student added!');
        setFormData({ name: '', email: '', age: '', grade: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} value={formData.age} />
        <input type="text" name="grade" placeholder="Grade" onChange={handleChange} value={formData.grade} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StudentForm;
// This component allows users to add a new student by filling out a form.
// It uses the `useState` hook to manage form data and `axios` to send a POST request to the backend API.