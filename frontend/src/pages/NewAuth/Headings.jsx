import React from "react";
import styles from "./Auth.module.css";

export default function Headings(props) {
  const { heading, subheading } = props;

  return (
    <div className={styles.headings}>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
  );
}
