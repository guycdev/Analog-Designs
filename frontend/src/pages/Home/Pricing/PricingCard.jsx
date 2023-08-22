import React from "react";
import styles from "./Pricing.module.css";

export default function PricingCard(props) {
  const { background, price, heading, subheading, features, isMainCard } =
    props;

  const featuresArr = [];

  return (
    <div className={styles.pricingCardContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            ${price}&nbsp;
            <em>/site</em>
          </p>
        </div>
      </div>
      <div className={`card ${styles.pricingContent}`}>
        <div className={styles.pricingHeadings}>
          <h4>{subheading}</h4>
        </div>
        <div className={styles.featureContainer}>{featuresArr}</div>
      </div>
    </div>
  );
}
