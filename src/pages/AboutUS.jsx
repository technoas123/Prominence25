import React from "react";
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Prominence</h1>
        <p>Where Innovation Meets Excellence</p>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
        Prominence is an annual techno-cultural fest organized by the Department of Electronics and Communication Engineering. Since its inception in 2019, the fest has aimed to showcase the latest trends and developments in electronics, communication, robotics, and artificial intelligence while promoting innovation and collaboration among students, faculty, and industry partners.
        </p>
        <p>
        Prominence 2025, in association with Robotics and Artificial Intelligence, is expected to attract over 2,000 students. The event features a variety of exhibitions and activities catering to diverse interests. Attendees can look forward to hands-on workshops, inspiring talk sessions, project exhibitions, and other innovative activities centered around the electronics and robotics domain.
        </p>
      </section>

      {/* Our Mission */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to ignite curiosity, foster innovation, and provide a
          platform for students to explore the limitless possibilities of
          technology. We aim to bridge the gap between academia and industry by
          organizing workshops, competitions, and tech exhibitions that challenge
          minds and push boundaries.
        </p>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> We believe in pushing the boundaries of
            what’s possible.
          </li>
          <li>
            <strong>Collaboration:</strong> Teamwork is at the heart of everything
            we do.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest standards in
            all our endeavors.
          </li>
          <li>
            <strong>Inclusivity:</strong> We welcome everyone to be a part of our
            journey.
          </li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h2>Join Us at Prominence 2025!</h2>
        <p>Be a part of the most exciting tech fest in the region.</p>
        <Link to="/events">
        <button className="cta-button">Explore More</button>
        </Link>      
      </section>
    </div>
  );
};

export default AboutUs;