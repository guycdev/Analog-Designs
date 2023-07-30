import React from "react";
import styles from "./Testimonials.module.css";
import quotes from "../../../../assets/quotes.svg";
import Card from "../../../elements/Card";

export default function Testimonial(props) {
  const { header, content, name, subheading } = props;

  return (
    <Card id={0} img={quotes} heading={header}>
      <div className={styles.testimonialContainer}>
        <p>{content}</p>
        <p>{name}</p>
        <h6>{subheading}</h6>
      </div>
    </Card>
  );
}
