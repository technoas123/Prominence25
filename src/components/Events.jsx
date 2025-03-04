import React, { useState } from "react";
import events from "../data/events"; // Import event data
import "../styles/Events.css";
import { Link } from "react-router-dom"; // Ensure Link is imported

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  // Sort events by ID in descending order (latest first)
  const sortedEvents = [...events].sort((a, b) => b.id - a.id);

  return (
    <div className="events-section">
      <h1>Events</h1>
      <div className="events-list">
        {sortedEvents.slice(0, 4).map((event) => ( // Show only the latest 4 events
          <div
            key={event.id}
            className="event-card"
            onMouseEnter={() => setActiveEvent(event.id)}
            onMouseLeave={() => setActiveEvent(null)}
            onClick={() => setActiveEvent(event.id)} // For mobile touch
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div
              className={`event-details ${
                activeEvent === event.id ? "active" : ""
              }`}
            >
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <Link to={`/event/${event.id}`} className="read-more-button">
                SEE MORE
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <Link to="/events" className="view-more-btn">
        View More
      </Link>
    </div>
  );
};

export default Events;