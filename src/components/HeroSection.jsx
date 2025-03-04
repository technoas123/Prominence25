import React from "react";
import "../styles/Hero.css";
import Robot from "./Robot";
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Particle Background remains as is */}
      <div className="hero-content">
        <h1 className="hero-title">Prominence</h1>
        <p className="hero-subtitle">Connect Innovate Inspire</p>
        <Link to="/events">
        <button className="hero-cta">Explore Now</button>
        </Link> 
      </div>
      {/* 3D Hologram Planet */}
      <div className="hero-planet">
        <Robot />
      </div>
      {/* Scroll Down Indicator */}
      <div className="scroll-down">&#8595;</div>
    </div>
  );
};

export default HeroSection;
