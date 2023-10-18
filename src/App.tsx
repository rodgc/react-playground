import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
    </Box>
  );
}

export default App;
