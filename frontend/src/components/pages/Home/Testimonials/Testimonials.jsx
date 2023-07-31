import React from "react";
import styles from "./Testimonials.module.css";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonialsArr = [
    {
      header: "Quick and Effective!",
      subheading: "Mortgage Broker, QuickMortgage Inc.",
      content:
        "Analog Designs brought our clients online fast, smoothing the mortgage approval process. Their creativity and attention to detail were exactly what we needed!",
      name: "Sarah Thompson",
    },
    {
      header: "Problem-Solvers Extraordinaire!",
      subheading: "Financial Advisor, HomeLoans Co.",
      content:
        "I was impressed by Analog Designs' ability to understand our unique needs. Their creative problem-solving and innovative thinking made all the difference in our success.",
      name: "James McArthur",
    },
    {
      header: "Professional Service",
      subheading: "Mortgage Underwriter, BankChoice Ltd.",
      content:
        "Working with Analog Designs was a pleasure. They tailored their solutions to fit our temporary needs, making them our go-to agency for future projects.",
      name: "Maria Gonzalez",
    },
  ];

  const testimonialElementsArr = testimonialsArr.map((testimonial, index) => {
    return (
      <Testimonial
        key={index}
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
