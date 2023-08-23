import React from "react";
import logo from "../../assets/logo.svg";
import { ReactSVG } from "react-svg";
import styles from "./Auth.module.css";

export default function Logo() {
  return (
    <ReactSVG
      src={logo}
      beforeInjection={(svg) => {
        svg.classList.add(styles.logo);
      }}
    />
  );
}
