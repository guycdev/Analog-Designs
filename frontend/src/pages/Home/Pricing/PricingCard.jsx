import React from "react";
import styles from "./Pricing.module.css";
import checkmark from "../../../assets/checkmark.svg";
import { ReactSVG } from "react-svg";

export default function PricingCard(props) {
  const {
    background,
    price,
    heading,
    subheading,
    features,
    isMainCard,
    planStatus,
    icon,
  } = props;

  const featuresArr = features.map((feature, index) => {
    return (
      <div className={styles.feature} key={index}>
        <ReactSVG src={checkmark} />
        <p key={index}>{feature}</p>
      </div>
    );
  });

  return (
    <div
      className={`${styles[`${background}Container`]} ${
        styles.pricingCardContainer
      }`}
    >
      <div className={styles.whiteBg}>
        <div className={`${styles[background]}  ${styles.imgContainer}`}>
          <div className={styles.headingContainer}>
            <div className={styles.planStatus}>
              <>
                <ReactSVG src={icon} />
                <p>{planStatus}</p>
              </>
            </div>
            <h2 className={styles.heading}>{heading}</h2>
          </div>
          <div className={`${styles.priceContainer}`}>
            <p className={styles.price}>
              ${price}&nbsp;
              <em>/site</em>
            </p>
          </div>
        </div>
      </div>
      <div className={`card ${styles.pricingContent}`}>
        <div className={styles.pricingHeadings}>
          <h4
            className={`${styles.pricingHeading} ${
              !isMainCard ? styles.black : ""
            }`}
          >
            {subheading}
          </h4>
        </div>
        <div className={styles.featureContainer}>{featuresArr}</div>
        <a className={styles[`${background}Btn`]} href="#contact">
          Contact Us
        </a>
      </div>
    </div>
  );
}
