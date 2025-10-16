// src/App.jsx
import { MantineProvider, Box } from '@mantine/core';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Navbar from './components/Navbar'; 
import Services from './pages/Services'; // Correctly import the Services page

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        // Defining a strong primary color palette
        colors: {
          primary: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#08306B'],
        },
      }}
    >
      <HashRouter>
        <Box 
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            width: '100%', 
          }}
        >
          
          {/* Navbar Component */}
          <Navbar /> 
          
          {/* Main content area takes up all remaining vertical space */}
          <Box component="main" style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} /> 
              {/* Route for the Services page content */}
              <Route path="/services" element={<Services />} /> 
              {/* Note: I removed the duplicate '/services' route */}
            </Routes>
          </Box>
          
          {/* Simple Footer */}
          <Box 
            component="footer"
            style={{
              height: 40,
              textAlign: 'center',
              padding: '0.5rem',
              backgroundColor: '#F5F5F5',
              boxShadow: '0 -2px 4px rgba(0,0,0,0.05)',
              width: '100%', 
            }}
          >
            © {new Date().getFullYear()} Wayne’s Family Business
          </Box>

        </Box>
      </HashRouter>
    </MantineProvider>
  );
}