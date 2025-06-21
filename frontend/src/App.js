// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    background: {
      default: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Student Management System
            </Typography>
            <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}></Button>
            <Button color="inherit" component={Link} to="/add" startIcon={<PersonAddIcon />}></Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<StudentForm />} />
            <Route path="/edit/:id" element={<StudentForm />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
