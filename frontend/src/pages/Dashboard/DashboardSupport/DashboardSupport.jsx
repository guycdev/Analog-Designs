import React from "react";
import styles from "./DashboardSupport.module.css";
import DashboardContact from "./DashboardContact";
import TestimonialManager from "./TestimonialManager";
import Faq from "./Faq";

export default function DashboardSupport() {
  return (
    <>
      <DashboardContact />
      <div className={styles.lastColumn}>
        <TestimonialManager />
        <Faq />
      </div>
    </>
  );
}
