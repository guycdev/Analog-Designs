import React, { useState } from "react";
import styles from "./DashboardSupport.module.css";
import info from "../../../assets/info.svg";
import { ReactSVG } from "react-svg";
import HoverToolTip from "../../../components/HoverToolTip";
import TextAreaInput from "../../../components/TextAreaInput";
import TextInput from "../../../components/TextInput";
import useFormField from "../../../hooks/useFormField";
import Button from "../../../components/Button";
import check from "../../../assets/check.svg";

export default function TestimonialManager() {
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    organization: "",
    review: "",
  });

  const formSetter = useFormField(setTestimonialData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("testimonial submitted");
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
            onChange={formSetter}
            value={testimonialData.name}
          />
          <TextInput
            label="Organization"
            id="organization"
            name="organization"
            placeholder="Organization..."
            onChange={formSetter}
            value={testimonialData.organization}
          />
        </div>
        <TextAreaInput
          label="Review"
          id="review"
          name="review"
          placeholder="Review..."
          onChange={formSetter}
          value={testimonialData.review}
        />
        <Button buttonType="primary-btn" text="Submit" img={check} />
      </form>
    </div>
  );
}
