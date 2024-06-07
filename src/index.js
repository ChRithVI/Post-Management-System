import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import { Typography, Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
      <Typography variant="h3">Post Management System</Typography>
      <Typography variant="h5">Simple CRUD Application</Typography>
    </Box>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Posts' element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
