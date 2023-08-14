import React from "react";
import styles from "./DashboardOrder.module.css";
import InformationForm from "./InformationForm";

export default function DashboardOrder() {
  return (
    <>
      <InformationForm />
      <div className={styles.lastColumn}>
        <div className={`card ${styles.servicesContainer}`}></div>
        <div className={`card ${styles.calendarContainer}`}></div>
      </div>
    </>
  );
}
