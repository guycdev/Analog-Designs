import React from "react";
import styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className={styles.pricingContainer}>
      <PricingCard price={200} heading="" subheading="" />
    </section>
  );
}
