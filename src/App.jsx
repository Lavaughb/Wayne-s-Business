// src/App.jsx
import { MantineProvider, Box, Container } from '@mantine/core';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Services from './pages/Services';
import Share from './pages/Share';
import Navbar from './components/Navbar'; 

// Custom Earth Tone Palette (Brown, Yellow, Light Green)
const earthBrown = [
  '#f5f0ed', // 0: lightest (Light Cream/Beige)
  '#e5d3c8', // 1
  '#cbaea0', // 2
  '#b28e75', // 3
  '#99735a', // 4
  '#7f5b42', // 5: Base for buttons
  '#65452d', // 6: Darker primary for text/background
  '#4c311c', // 7: Darkest for headings/CTA
  '#331e0b', // 8
  '#190c00'  // 9: darkest
];

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        // Define custom primary color and use Mantine's built-in yellow/green
        colors: {
          primary: earthBrown, // Our new Earth Brown
        },
        primaryColor: 'primary', // Set primary color to the custom brown
      }}
    >
      <HashRouter>
        {/* The entire application uses flex-direction: column for a persistent top Navbar */}
        <Box 
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            width: '100%', 
          }}
        >
          
          {/* Navbar is persistent at the top of the flex column */}
          <Navbar /> 
          
          {/* Main content area takes up all remaining vertical space */}
          <Box component="main" style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/services" element={<Services />} />
              <Route path="/share" element={<Share />} />
            </Routes>
          </Box>
          
          {/* Simple Footer */}
          <Box 
            component="footer"
            style={{
              height: 50,
              textAlign: 'center',
              padding: '1rem',
              backgroundColor: '#333', // Dark color for contrast
              color: '#FFF',
              width: '100%', 
            }}
          >
            © {new Date().getFullYear()} CULSJA Commercial Utility Services
          </Box>

        </Box>
      </HashRouter>
    </MantineProvider>
  );
}