import React from "react";
import styles from "./Pricing.module.css";

export default function PricingCard(props) {
  const { background, price, heading, subheading, features, isMainCard } =
    props;

  const featuresArr = [];

  return (
    <div className={`card ${styles.pricingCardContainer}`}>
      <div className={styles.priceContainer}>
        <h3>{price}</h3>
      </div>
      <div className={styles.pricingContent}>
        <div className={styles.pricingHeadings}>
          <h2>{heading}</h2>
          <em>{subheading}</em>
        </div>
        <div className={styles.featureContainer}>{featuresArr}</div>
      </div>
    </div>
  );
}
