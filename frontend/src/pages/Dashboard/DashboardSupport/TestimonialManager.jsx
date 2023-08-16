import React, { useState } from "react";
import styles from "./DashboardSupport.module.css";
import info from "../../../assets/info.svg";
import { ReactSVG } from "react-svg";

export default function TestimonialManager() {
  const [isHovered, setIsHovered] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    organization: "",
    review: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("testimonial submitted");
  }

  function handleChange(event) {
    const { name, value } = event;

    setTestimonialData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="card">
      <div className={styles.testimonialFormHeadings}>
        <h2>Testimonials</h2>
        <p>Enjoyed our service ? Leave us a review !</p>
        <div
          className={styles.help}
          onMouseEnter={() => setIsHovered((prev) => !prev)}
          onMouseLeave={() => setIsHovered((prev) => !prev)}
        >
          <ReactSVG src={info} />
          <p style={isHovered ? { opacity: "1" } : { opacity: "0" }}>
            Testimonials are displayed on the home page
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              required
              onChange={handleChange}
              value={testimonialData.name}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="organization">Organization:</label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Organization..."
              required
              onChange={handleChange}
              value={testimonialData.organization}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="review">Review:</label>
          <textarea
            name="review"
            id="review"
            placeholder="Review..."
            required
            onChange={handleChange}
            value={testimonialData.review}
          />
        </div>
      </form>
    </div>
  );
}
