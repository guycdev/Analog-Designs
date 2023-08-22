import React from "react";
import PricingCard from "../Pricing/PricingCard";
import createAccount from "../../../assets/create-account.jpg";
import ticket from "../../../assets/ticket.jpg";
import coding from "../../../assets/coding.png";
import styles from "./Steps.module.css";
import Card from "../../../components/Card";

export default function Steps() {
  const tag = {
    color: "#9c9ced",
    name: "Steps",
  };

  return (
    <section id="learn-more" className={styles.container}>
      <div className={styles.steps}>
        <Card
          heading={
            <>
              <span>Create</span> Account
            </>
          }
          content={
            <>
              Set up an <span>account</span> with our integrated system. This
              lets you monitor your <span>present</span> and{" "}
              <span>future orders</span> conveniently.
            </>
          }
          btnStyle="primary-btn"
          img={createAccount}
          tag={tag}
          id={0}
        />
        <Card
          heading={
            <>
              Open a <span>Ticket</span>
            </>
          }
          content={
            <>
              Select from our extensive range of <span>design templates</span>{" "}
              and packages then open a <span>ticket</span> with your specific
              request.
            </>
          }
          btnStyle="primary-btn"
          img={ticket}
          tag={tag}
          id={1}
        />
        <Card
          heading={
            <>
              We Handle the <span>Rest</span>
            </>
          }
          content={
            <>
              Once we have your details, we manage the <span>building</span> and{" "}
              <span>hosting</span> of your client's site. Be sure to follow up
              upon approval.
            </>
          }
          btnStyle="primary-btn"
          img={coding}
          tag={tag}
          id={2}
        />
      </div>
    </section>
  );
}
