import React from "react";
import styles from "./Auth.module.css";
import Headings from "./Headings";
import dash from "../../assets/dash.png";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import node from "../../assets/node.svg";
import wixx from "../../assets/wixx.svg";
import squarespace from "../../assets/squarespace.svg";
import Marquee from "../../components/Marquee";

export default function AuthHeroCard() {
  return (
    <div className={styles.authHeroCardContainer}>
      <Headings
        heading="The simplest way to manage your clients online presence"
        subheading={
          <>
            Please <span>enter </span> your <span>details</span> to access our
            <span> order manager</span>
          </>
        }
      />
      <img src={dash} />
      <Marquee logos={[react, node, squarespace, wixx]} />
    </div>
  );
}
