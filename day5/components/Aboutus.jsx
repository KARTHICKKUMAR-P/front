import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

function Aboutus() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
          <Link to="/Contactus" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <h1>About Us</h1>
      <p>Welcome to the About Us page.</p>
      <p>
      "Welcome to the About Us page! We are a team dedicated to providing exceptional services and solutions to our clients. With years of experience, we focus on innovation, quality, and customer satisfaction in everything we do. Our mission is to build lasting relationships and deliver results that exceed expectations. Learn more about our journey, values, and the talented people behind our success."</p>
      <Link to="/">
        <button className="home-button">Go to Home</button>
      </Link>
      <footer className="footer">Karthick</footer>
    </div>
  );
}

export default Aboutus;
