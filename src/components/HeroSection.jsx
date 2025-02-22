import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import "../styles/HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Prominence</h1>
        <p className="hero-tagline">Where Innovation Meets Imagination.</p>
        <button className="hero-button">Know More</button>
      </div>

      {/* 3D Cube */}
      <div className="hero-3d">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Box args={[1.5, 1.5, 1.5]}>
            <meshStandardMaterial color="cyan" wireframe />
          </Box>
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">↓</div>
    </div>
  );
};

export default HeroSection;
