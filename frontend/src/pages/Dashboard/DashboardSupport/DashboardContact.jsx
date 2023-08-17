import React, { useState } from "react";
import styles from "./DashboardSupport.module.css";
import ProgressBar from "../../../components/ProgressBar";
import TextAreaInput from "../../../components/TextAreaInput";
import TextInput from "../../../components/TextInput";
import useFormField from "../../../hooks/useFormField";
import Button from "../../../components/Button";
import check from "../../../assets/check.svg";

export default function DashboardContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const formSetter = useFormField(setFormData);

  return (
    <div className={`card ${styles.contactContainer}`}>
      <ProgressBar formData={formData} formFieldCount={4} />
      <div className={styles.orderFormHeadings}>
        <h2>Company Information</h2>
        <p>Input Company / Order Information</p>
      </div>
      <form action="">
        <TextInput
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Name..."
          onChange={formSetter}
          value={formData.name}
        />
        <TextInput
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="Email..."
          onChange={formSetter}
          value={formData.email}
        />
        <TextInput
          label="Subject"
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject..."
          onChange={formSetter}
          value={formData.subject}
        />
        <TextAreaInput
          label="Description"
          id="description"
          name="description"
          placeholder="Description..."
          onChange={formSetter}
          value={formData.description}
        />
        <Button buttonType="primary-btn" text="Submit" img={check} />
      </form>
    </div>
  );
}
