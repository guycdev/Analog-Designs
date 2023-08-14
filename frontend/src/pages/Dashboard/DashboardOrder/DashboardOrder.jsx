import React, { useContext, useState } from "react";
import styles from "./DashboardOrder.module.css";
import InformationForm from "./InformationForm";
import ServiceManager from "./ServiceManager";

export const FormData = React.createContext();

export default function DashboardOrder() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    ownerEmail: "",
    ownerName: "",
    ownerPhone: "",
    services: [
      {
        serviceName: "",
        servicePrice: "",
        serviceDescription: "",
      },
    ],
    dates: {
      start: "",
      end: "",
    },
  });

  return (
    <>
      <InformationForm formData={formData} setFormData={setFormData} />
      <div className={styles.lastColumn}>
        <ServiceManager formData={formData} setFormData={setFormData} />
        <div className={`card ${styles.calendarContainer}`}></div>
      </div>
    </>
  );
}
