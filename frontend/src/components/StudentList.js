// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
  IconButton,
  Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/students/');
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:8000/api/students/${id}/`);
        fetchStudents();
      } catch (err) {
        console.error('Error deleting student:', err);
      }
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" color="primary">
          Student List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/add')}
        >
          Add Student
        </Button>
      </Stack>

      <Paper elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Name</TableCell>
              <TableCell sx={{ color: '#fff' }}>Email</TableCell>
              <TableCell sx={{ color: '#fff' }}>Age</TableCell>
              <TableCell sx={{ color: '#fff' }}>Grade</TableCell>
              <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => navigate(`/edit/${student.id}`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(student.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {students.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default StudentList;
