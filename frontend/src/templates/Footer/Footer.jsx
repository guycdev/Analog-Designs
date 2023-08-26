import React from "react";
import plus from "../../assets/logo.svg";
import { ReactSVG } from "react-svg";
import styles from "./Footer.module.css";

export default function Footer(props) {
  const { logo } = props;

  return (
    <footer className={styles.container}>
      <div className={`card ${styles.logo}`}>
        <ReactSVG
          src={plus}
          beforeInjection={(svg) => {
            svg.classList.add("centre-svg");
          }}
        />
        <h4>{logo}</h4>
      </div>
      <ul className="card">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#gallery">Our Work</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
      </ul>
    </footer>
  );
}
