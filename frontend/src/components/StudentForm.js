// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '', grade: '' });
  const navigate = useNavigate();
  const { id } = useParams(); // If present, it's an edit

  // Load student data for editing
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/students/${id}/`)
        .then(res => setFormData(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      // Edit
      await axios.put(`http://localhost:8000/api/students/${id}/`, formData);
    } else {
      // Add
      await axios.post('http://localhost:8000/api/students/', formData);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default StudentForm;
