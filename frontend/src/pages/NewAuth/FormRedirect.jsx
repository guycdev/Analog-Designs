import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

export default function FormRedirect(props) {
  const { text, redirect, path } = props;

  return (
    <p className={styles.wrongPageLink}>
      {text}
      <Link to={path}>{redirect}</Link>
    </p>
  );
}
