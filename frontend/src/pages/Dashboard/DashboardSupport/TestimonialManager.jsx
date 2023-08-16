import React, { useState } from "react";
import styles from "./DashboardSupport.module.css";
import info from "../../../assets/info.svg";
import { ReactSVG } from "react-svg";
import HoverToolTip from "../../../components/HoverToolTip";
import TextAreaInput from "../../../components/TextAreaInput";
import TextInput from "../../../components/TextInput";

export default function TestimonialManager() {
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
    <div className="card" id="testimonials">
      <div className={styles.testimonialFormHeadings}>
        <h2>Testimonials</h2>
        <p>Enjoyed our service ? Leave us a review !</p>
        <HoverToolTip text="Testimonials are displayed on the home page">
          <ReactSVG src={info} />
        </HoverToolTip>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inline-input">
          <TextInput
            label="Name"
            id="name"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            value={testimonialData.name}
          />
          <TextInput
            label="Organization"
            id="organization"
            name="organization"
            placeholder="Organization..."
            onChange={handleChange}
            value={testimonialData.organization}
          />
        </div>
        <TextAreaInput
          label="Review"
          id="review"
          name="review"
          placeholder="Review..."
          onChange={handleChange}
          value={testimonialData.review}
        />
      </form>
    </div>
  );
}
