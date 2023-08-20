import React, { useState } from "react";
import styles from "./DashboardOrder.module.css";
import InformationForm from "./InformationForm";
import ServiceManager from "./ServiceManager";
import Calendar from "./Calendar";
import OrderSummaryChart from "./OrderSummaryChart";

export default function DashboardOrder() {
  const today = new Date();

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    ownerEmail: "",
    ownerName: "",
    ownerPhone: "",
    companyDescription: "",
    services: [
      {
        serviceName: "",
        servicePrice: "",
        serviceDescription: "",
      },
    ],
    dates: {
      //Edge case to handle initial value of start date is handled inside the ProgressBar component
      from: {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
      },
      to: null,
    },
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form data submitted");
  }

  return (
    <>
      <InformationForm formData={formData} setFormData={setFormData} />
      <div className={styles.lastColumn}>
        <ServiceManager
          services={formData.services}
          setFormData={setFormData}
        />
        <div className={styles.bottomRowLastColumn}>
          <Calendar dates={formData.dates} setFormData={setFormData} />
          <OrderSummaryChart
            dates={formData.dates}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
