import React from "react";
import { useParams, Link } from "react-router-dom";
import events from "../data/events"; // Adjust the path as needed
import "../styles/EventDetails.css"; // Adjust the path as needed

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const event = events.find((event) => event.id === parseInt(id)); // Find the event by ID

  if (!event) {
    return <div><h2>Event Not Found!</h2></div>; // Handle case where event is not found
  }

  console.log("Event Content:", event.content); // Debugging line

  return (
    <div className="event-details-container">
      <div className="event-poster">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-content">
        <h1>{event.title}</h1>
        <p className="event-meta">
          <strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location}
        </p>
        <p className="event-description">{event.description}</p>
        <p className="event-content">{event.content}</p>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="register-button"
        >
          Register Now
        </a>
        <Link to="/events" className="back-button">
          Back To Events
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;