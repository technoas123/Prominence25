import React, { useState } from "react";
import events from "../data/events"; // Import event data
import "../styles/Events.css"

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <div className="events-section">
      <h1>Events</h1>
      <div className="events-list">
        {events.map((event) => (
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
              <a href={event.link} className="read-more-button">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;