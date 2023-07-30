import React from "react";
import PricingCard from "../Pricing/PricingCard";
import createAccount from "../../../../assets/create-account.jpg";
import ticket from "../../../../assets/ticket.jpg";
import coding from "../../../../assets/coding.png";
import styles from "./Steps.module.css";
import Card from "../../../elements/Card";

export default function Steps() {
  const tag = {
    color: "#9c9ced",
    name: "Steps",
  };

  return (
    <section id="learn-more" className={styles.container}>
      <Card id={0}>
        <div className={styles.steps}>
          <PricingCard
            heading="Create Account"
            content="Set up an account with our integrated system. This lets you monitor your present and future orders conveniently."
            btnStyle="primary-btn"
            img={createAccount}
            tag={tag}
          />
          <PricingCard
            heading="Open a Ticket"
            content="Select from our extensive range of design templates and packages then open a ticket with your specific request."
            btnStyle="primary-btn"
            img={ticket}
            tag={tag}
          />
          <PricingCard
            heading="We Handle the Rest"
            content="Once we have your details, we manage the building and hosting of your client's site.  Be sure to follow up upon approval."
            btnStyle="primary-btn"
            img={coding}
            tag={tag}
          />
        </div>
      </Card>
    </section>
  );
}
