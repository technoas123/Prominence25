import React, { useState, useEffect, useRef } from "react";
import "../styles/EventsPage.css";
import events from "../data/events";
import EventP from "../components/Events_Page";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  // Sort events by ID in descending order
  const sortedEvents = [...events].sort((a, b) => b.id - a.id);

  const showSlider = (type) => {
    const totalSlides = sortedEvents.slice(0, 4).length;

    if (type === "next") {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      sliderRef.current.appendChild(sliderRef.current.children[0]);
      thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
      carouselRef.current.classList.add("next");
    } else {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      sliderRef.current.prepend(sliderRef.current.children[sliderRef.current.children.length - 1]);
      thumbnailBorderRef.current.prepend(thumbnailBorderRef.current.children[thumbnailBorderRef.current.children.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      carouselRef.current?.classList.remove("next");
      carouselRef.current?.classList.remove("prev");
    }, 3000);

    clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => {
      showSlider("next");
    }, 7000);
  };

  const autoNextRef = useRef(null);

  useEffect(() => {
    autoNextRef.current = setTimeout(() => {
      showSlider("next");
    }, 7000);

    return () => {
      clearTimeout(autoNextRef.current);
    };
  }, []);

  return (
    <div className="events-page">
      {/* Carousel */}
      <div className="carousel" ref={carouselRef}>
        {/* List of Slides */}
        <div className="list" ref={sliderRef}>
          {sortedEvents.slice(0, 4).map((event, index) => (
            <div
              className={`item ${index === currentSlide ? "active" : ""}`}
              key={event.id}
            >
              <img src={event.image} alt={event.title} />
              <div className="content">
                <div className="title">{event.title}</div>
                <div className="des">{event.description}</div>
                <div className="buttons">
                <Link to={`/event/${event.id}`} className="see-more-button">
                  SEE MORE
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          {sortedEvents.slice(0, 4).map((event, index) => (
            <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={event.id}
            onClick={() => setCurrentSlide(index)} // Navigate to the corresponding slide
          >
            <img src={event.image} alt={event.title} />
            <div className="content">
              <div className="title">{event.title}</div>
            </div>
          </div>
        ))}
      </div>

        {/* Arrows */}
        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            &gt;
          </button>
        </div>

        {/* Time Running */}
        <div className="time" ref={timeRef}></div>
      </div>

      {/* EventP Component */}
      <EventP />
    </div>
  );
};

export default EventsPage;