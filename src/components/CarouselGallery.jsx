import React from "react";
import { motion } from "framer-motion";
import "../styles/CarouselGallery.css";

import img0 from "/images/image0.jpg";
import img1 from "/images/image1.jpg";
import img2 from "/images/image2.jpg";
import img3 from "/images/image3.jpg";
import img4 from "/images/image4.jpg";
import img5 from "/images/image5.jpg";
import img6 from "/images/image6.jpg";
import img7 from "/images/image7.jpg";
import img8 from "/images/image8.jpg";
import img9 from "/images/image9.jpg";
import img10 from "/images/image10.jpg";
import img11 from "/images/image11.jpg";

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const CarouselGallery = () => {
  return (
    <div className="carousel-gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="carousel-container">
        <motion.div
          className="carousel-track"
          animate={{ x: ["0%", "-100%"] }} // Move from 0% to -100% for infinite loop
          transition={{
            ease: "linear",
            duration: 40, // Adjust speed (lower = faster)
            repeat: Infinity, // Infinite loop
          }}
        >
          {/* Duplicate images for seamless looping */}
          {[...images, ...images].map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselGallery;