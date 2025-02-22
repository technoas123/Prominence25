import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the FaArrowUp icon
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener
  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;