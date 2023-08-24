import React from "react";
import styles from "./Auth.module.css";
import Marquee from "react-fast-marquee";
import Headings from "./Headings";
import dash from "../../assets/dash.png";
import { ReactSVG } from "react-svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import node from "../../assets/node.svg";
import mysql from "../../assets/mysql.svg";

export default function AuthHeroCard() {
  return (
    <div className={styles.authHeroCardContainer}>
      <Headings
        heading="The simplest way to manage your clients online presence"
        subheading={
          <>
            Please <span>enter </span> your <span>details</span> to access our
            <span> dashboard manager</span>
          </>
        }
      />
      <img src={dash} />
      <div className={styles.marqueeContainer}>
        <Marquee>
          <ReactSVG
            src={react}
            beforeInjection={(svg) => {
              svg.classList.add(styles.marqueeItem);
            }}
          />
          <ReactSVG
            src={mysql}
            beforeInjection={(svg) => {
              svg.classList.add(styles.marqueeItem);
            }}
          />
          <ReactSVG
            src={bootstrap}
            beforeInjection={(svg) => {
              svg.classList.add(styles.marqueeItem);
            }}
          />
          <ReactSVG
            src={node}
            beforeInjection={(svg) => {
              svg.classList.add(styles.marqueeItem);
            }}
          />
        </Marquee>
      </div>
    </div>
  );
}
