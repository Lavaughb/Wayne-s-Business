import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Mantine base styles
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'; 

// 🚨 NEW LINE: Import the nuclear fix CSS
import './global-fix.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);