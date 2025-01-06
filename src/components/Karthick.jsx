import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';

function Karthick() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default Karthick;
