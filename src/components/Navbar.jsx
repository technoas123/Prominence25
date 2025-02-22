import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import logo from "../assets/logo.png"; // Add your logo image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo and Title */}
        <div className="logo-container">
          <img src={logo} alt="Prominence Logo" className="logo-img" />
          <h1 className="logo-text">Prominence</h1>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
