import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

function Home() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
          <Link to="/Contactus" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <p>"Welcome to our homepage! Here, you'll find information about our company, our values, and the services we offer. We strive to provide the best experience for our customers with a focus on quality and innovation. Feel free to explore our website and learn more about what we do. If you have any questions, don't hesitate to contact us—we're here to help!"</p>
      <Link to="/">
        <button className="home-button">Go to Home</button>
      </Link>
      <footer className="footer">Karthick</footer>
    </div>
  );
}

export default Home;
