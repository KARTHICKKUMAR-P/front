import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

function Contactus() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
          <Link to="/Contactus" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <h1>Contact Us</h1>
      <p>Welcome to the Contact Us page.</p>
      <p>"Welcome to the Contact Us page! We're here to assist you with any questions or inquiries you may have. Whether you need support, more information about our services, or just want to get in touch, we’d love to hear from you. Please use the form below or reach out through our contact details. Our team is ready to provide the help you need!"</p>
      <Link to="/">
        <button className="home-button">Go to Home</button>
      </Link>
      <footer className="footer">Karthick</footer>
    </div>
  );
}

export default Contactus;
