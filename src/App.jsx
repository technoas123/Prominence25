import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CarouselGallery from "./components/CarouselGallery"
import Sponsors from "./components/Sponsors"

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Navbar />
        <HeroSection />
        <Events />
        <About />
        <CarouselGallery />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
