// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box
} from '@mui/material';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    grade: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/students/${id}/`)
        .then(res => setFormData(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8000/api/students/${id}/`, formData);
      } else {
        await axios.post('http://localhost:8000/api/students/', formData);
      }
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          {id ? 'Edit Student' : 'Add Student'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            {id ? 'Update Student' : 'Add Student'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentForm;
