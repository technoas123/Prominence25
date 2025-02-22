import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css"

const Contact = () => {
    return(
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>Have any queries, Reach out to us!</p>
            <Link to="/contact" className="contact-button">Get in Touch</Link>
        </div>
    );
};

export default Contact;