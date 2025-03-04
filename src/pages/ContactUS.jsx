import React from "react";
import "../styles/ContactUs.css"; // Import your CSS file

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      {/* Map Integration */}
      <div className="map">
        <h2>Our Location</h2>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.1907938012287!2d76.6228879!3d9.578816000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d96b2fe8ed9%3A0xbade243e087b408!2sRAJIV%20GANDHI%20INSTITUTE%20OF%20TECHNOLOGY%2C%20KOTTAYAM!5e0!3m2!1sen!2sin!4v1741011858837!5m2!1sen!2sin"
          width="60%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Call-to-Action */}
      <div className="cta">
        <h2>Stay Connected</h2>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;