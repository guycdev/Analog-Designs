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
            Starter <span>Plan</span>
          </>
        }
        subheading={
          <>
            Ideal for a <span>simple online presence</span>
          </>
        }
        background="white"
        features={[
          "1 website pakacge",
          "3 page website",
          "Non-aged domain",
          "1 month free hosting",
          "Costume logos",
        ]}
        isMainCard={false}
        planStatus="Starter Plan"
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
          "2 website package",
          "4 page websites",
          "Aged domain",
          "2 month free hosting",
          "Costume logos",
          "24/7 support",
          "Advanced SEO",
          "2-day delivery",
        ]}
        isMainCard={true}
        planStatus="Best Value"
      />
      <PricingCard
        price={500}
        heading={
          <>
            Proffesional <span>Plan</span>
          </>
        }
        subheading={
          <>
            Great for <span>growing brokers</span>
          </>
        }
        background="white"
        features={[
          "1 website package",
          "4 page website",
          "Aged domain",
          "2 month free hosting",
          "Advanced SEO",
        ]}
        isMainCard={false}
        planStatus="Most Popular"
      />
    </section>
  );
}
