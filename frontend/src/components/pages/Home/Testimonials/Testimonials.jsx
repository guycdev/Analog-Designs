import React from "react";
import styles from "./Testimonials.module.css";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonialsArr = [
    {
      header: "A Swift Solution",
      subheading: "Mortgage Broker, QuickMortgage Inc.",
      content:
        "Analog Designs created an online presence for our clients in record time, making the mortgage approval process smooth and efficient. Their componentized templates were a game-changer!",
      name: "Sarah Thompson",
    },
    {
      header: "Innovative and Reliable",
      subheading: "Financial Advisor, HomeLoans Co.",
      content:
        "I was amazed by the strategic handling of domain names by Analog Designs. They understood exactly what underwriters look for, and their creative problem-solving made all the difference.",
      name: "James McArthur",
    },
    {
      header: "Highly Professional Service",
      subheading: "Mortgage Underwriter, BankChoice Ltd.",
      content:
        "Analog Designs' approach to website hosting, using Netlify with Vite, was perfectly aligned with our temporary needs. Their insightful solutions make them our go-to agency for future projects.",
      name: "Maria Gonzalez",
    },
  ];

  const testimonialElementsArr = testimonialsArr.map((testimonial) => {
    return (
      <Testimonial
        header={testimonial.header}
        subheading={testimonial.subheading}
        content={testimonial.content}
        name={testimonial.name}
      />
    );
  });

  return (
    <section className={styles.container}>{testimonialElementsArr}</section>
  );
}
