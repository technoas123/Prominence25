import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Updated CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Event Name */}
        <div className="footer-brand">
          <h2>Prominence '25</h2>
          <p>Experience the Future of Innovation</p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right Section - Social Media & Contact */}
        <div className="footer-social">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p>📍 RIT Kottayam, Kerala</p>
          <p>📧 prominence@rit.ac.in</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Prominence. All Rights Reserved.</p>
        <p>Developed by the Web Team</p>
      </div>
    </footer>
  );
};

export default Footer;
