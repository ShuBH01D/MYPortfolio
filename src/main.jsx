import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/ContactUs.jsx';
import Services from './components/Services.jsx'; // ✅ Correct casing
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

