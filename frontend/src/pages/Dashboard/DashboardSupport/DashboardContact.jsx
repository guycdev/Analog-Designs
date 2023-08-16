import React from "react";
import Form from "../../Home/ContactForm/Form";
import Styles from "./DashboardSupport.module.css";

export default function DashboardContact() {
  return (
    <div className={`card ${Styles.contactContainer}`}>
      <Form />
    </div>
  );
}
