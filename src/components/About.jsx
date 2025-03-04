import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Welcome to Prominence Techfest</h2>
          <p>
            Prominence Techfest is an annual event that brings together innovators, creators, and tech enthusiasts from around the world. Our mission is to inspire and empower the next generation of technologists by providing a platform to learn, collaborate, and showcase their talents.
          </p>
          <p>
            Whether you're a student, a professional, or simply a tech enthusiast, Prominence Techfest has something for everyone. Join us to explore the future of technology and innovation!
          </p>
          <Link className="Learn-more-btn" to="/about">
          <button>Learn More</button>
        </Link>
        </div>
        <div className="about-image">
          <img src="./images/about.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;