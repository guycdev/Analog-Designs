import React from "react";
import styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className={styles.pricingContainer}>
      <PricingCard
        price={200}
        heading={
          <>
            <span>Starter </span>Plan
          </>
        }
        subheading={
          <>
            Ideal for a <span>simple online presence</span>
          </>
        }
      />
      <PricingCard
        price={800}
        heading={
          <>
            <span> Reccuring </span>Plan
          </>
        }
        subheading={
          <>
            For <span>serious brokers</span> with multiple needs
          </>
        }
        isMainCard={true}
      />
      <PricingCard
        price={500}
        heading={
          <>
            <span>Professional </span>Plan
          </>
        }
        subheading={
          <>
            Great for <span>growing brokers</span>
          </>
        }
      />
    </section>
  );
}
