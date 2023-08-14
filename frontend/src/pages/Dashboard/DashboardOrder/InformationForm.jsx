import React from "react";
import styles from "./DashboardOrder.module.css";
import ProgressBar from "../../../components/ProgressBar";

export default function InformationForm(props) {
  const { formData, setFormData } = props;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className={`card ${styles.orderInformationForm}`}>
      <ProgressBar formData={formData} formFieldCount={7} />
      <div className={styles.orderFormHeadings}>
        <h2>Company Information</h2>
        <p>Input Company / Order Information</p>
      </div>
      <form action="">
        <div className={styles.inputContainer}>
          <label htmlFor="company-name">Company Name:</label>
          <input
            name="companyName"
            value={formData.companyName}
            type="text"
            id="company-name"
            required
            placeholder="Name..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="industry">Industry:</label>
          <input
            name="industry"
            value={formData.industry}
            type="text"
            id="industry"
            required
            placeholder="Industry..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="owner-name">Owner Name:</label>
          <input
            name="ownerName"
            value={formData.ownerName}
            type="text"
            id="owner-name"
            required
            placeholder="Owner Name..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="owner-email">Owner Email:</label>
          <input
            name="ownerEmail"
            value={formData.ownerEmail}
            type="text"
            id="owner-email"
            required
            placeholder="Owner Email..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="owner-phone">Owner Phone:</label>
          <input
            name="ownerPhone"
            value={formData.ownerPhone}
            type="phone"
            id="owner-phone"
            required
            placeholder="Owner Phone..."
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
