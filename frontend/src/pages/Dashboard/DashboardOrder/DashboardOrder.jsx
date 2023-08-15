import React, { useState } from "react";
import styles from "./DashboardOrder.module.css";
import InformationForm from "./InformationForm";
import ServiceManager from "./ServiceManager";
import Calendar from "./Calendar";
import OrderSummaryChart from "./OrderSummaryChart";

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
      // Placing 'end' before 'start' as a workaround for an edge case in the form progress calculation.
      // In the isObjectEmpty function, properties are checked in order, and we want to ensure 'start'
      // (which has a default value) doesn't prematurely indicate progress before the user has interacted with the form.
      end: "",
      start: "",
    },
  });

  return (
    <>
      <InformationForm formData={formData} setFormData={setFormData} />
      <div className={styles.lastColumn}>
        <ServiceManager
          services={formData.services}
          setFormData={setFormData}
        />
        <div className={styles.bottomRowLastColumn}>
          <Calendar
            startDate={formData.dates.start}
            endDate={formData.dates.end}
            setFormData={setFormData}
          />
          <OrderSummaryChart
            end={formData.dates.end}
            start={formData.dates.start}
          />
        </div>
      </div>
    </>
  );
}
