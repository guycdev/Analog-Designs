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
        background="white"
        features={[
          "feature 1",
          "feature 2",
          "feature 3",
          "feature 4",
          "feature 5",
        ]}
        isMainCard={false}
      />
      <PricingCard
        price={800}
        heading={
          <>
            <span> Recurring </span>Plan
          </>
        }
        subheading={
          <>
            For <span>serious brokers</span> with multiple needs
          </>
        }
        background="purple"
        features={[
          "feature 1",
          "feature 2",
          "feature 3",
          "feature 4",
          "feature 5",
          "feature 6",
          "feature 7",
          "feature 8",
        ]}
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
        background="white"
        features={[
          "feature 1",
          "feature 2",
          "feature 3",
          "feature 4",
          "feature 5",
        ]}
        isMainCard={false}
      />
    </section>
  );
}
