import React from "react";
import styles from "./DashboardOrder.module.css";
import ProgressBar from "../../../components/ProgressBar";
import TextAreaInput from "../../../components/TextAreaInput";
import TextInput from "../../../components/TextInput";
import useFormField from "../../../hooks/useFormField";

export default function InformationForm(props) {
  const { formData, setFormData } = props;

  const formSetter = useFormField(setFormData);

  return (
    <div className={`card ${styles.orderInformationForm}`}>
      <ProgressBar formData={formData} formFieldCount={7} />
      <div className={styles.orderFormHeadings}>
        <h2>Company Information</h2>
        <p>Input Company / Order Information</p>
      </div>
      <form action="">
        <TextInput
          label="Company Name"
          id="company-name"
          name="companyName"
          type="text"
          placeholder="Name..."
          onChange={formSetter}
          value={formData.companyName}
        />
        <TextInput
          label="Industry"
          id="industry"
          name="industry"
          type="text"
          placeholder="Industry..."
          onChange={formSetter}
          value={formData.industry}
        />
        <TextInput
          label="Owner Name"
          id="owner-name"
          name="ownerName"
          type="text"
          placeholder="Owner Name..."
          onChange={formSetter}
          value={formData.ownerName}
        />
        <TextInput
          label="Owner Email"
          id="owner-email"
          name="ownerEmail"
          type="text"
          placeholder="Owner Email..."
          onChange={formSetter}
          value={formData.ownerEmail}
        />
        <TextInput
          label="Owner Phone"
          id="owner-phone"
          name="ownerPhone"
          type="phone"
          placeholder="Owner Phone..."
          onChange={formSetter}
          value={formData.ownerPhone}
        />
        <TextAreaInput
          label="Company Description"
          id="company-description"
          name="companyDescription"
          placeholder="Description..."
          onChange={formSetter}
          value={formData.companyDescription}
        />
      </form>
    </div>
  );
}
