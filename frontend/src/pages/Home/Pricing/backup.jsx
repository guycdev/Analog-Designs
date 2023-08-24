import React from "react";
import styles from "./Pricing.module.css";
import checkmark from "../../../assets/checkmark.svg";
import { ReactSVG } from "react-svg";
import Button from "../../../components/Button";

export default function PricingCard(props) {
  const {
    background,
    price,
    heading,
    subheading,
    features,
    isMainCard,
    planStatus,
  } = props;

  const featuresArr = features.map((feature, index) => {
    return (
      <div className={styles.feature} key={index}>
        <ReactSVG src={checkmark} />
        <p key={index}>{feature}</p>
      </div>
    );
  });

  const opposite = background == "purple" ? "white" : "purple";

  return (
    <div
      className={`${`${styles[`${background}Container`]}`} ${
        styles.pricingCardContainer
      }`}
    >
      <div className={styles.whiteBg}>
        <div className={`${styles[background]}  ${styles.imgContainer}`}>
          <div className={styles.headingContainer}>
            <div className={styles.planStatus}>
              <p className={styles[opposite]}>{planStatus}</p>
            </div>
            <h2 className={`${styles[opposite]} ${styles.heading}`}>
              {heading}
            </h2>
          </div>
          <div className={`${styles.priceContainer}`}>
            <p className={`${styles[opposite]} ${styles.price}`}>
              ${price}&nbsp;
              <em>/site</em>
            </p>
          </div>
        </div>
      </div>
      <div className={`card ${styles.pricingContent}`}>
        <div className={styles.pricingHeadings}>
          <h4
            className={`${styles[opposite]} ${styles.pricingHeading} ${
              background == "white" ? styles.black : styles.white
            }`}
          >
            {subheading}
          </h4>
        </div>
        <div className={styles.featureContainer}>{featuresArr}</div>
        <Button
          text="Contact us"
          buttonType={isMainCard ? "primary-btn" : "secondary-btn"}
          img={checkmark}
        />
      </div>
    </div>
  );
}
