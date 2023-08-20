import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DashboardOrder.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as CalanderComp } from "react-modern-calendar-datepicker";

export default function Calendar(props) {
  const { dates, setFormData } = props;

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        dates: { ...event },
      };
    });
  }

  function dateConstructor(date) {
    return new Date(date.year, date.month - 1, date.day);
  }

  return (
    <div className="card">
      <div className={styles.orderFormHeadings}>
        <h2>Estimated Project Duration</h2>
        <p>Select the estimated application duration</p>
      </div>
      {/* <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      /> */}
      <CalanderComp
        value={dates}
        onChange={handleChange}
        shouldHighlightWeekends
        colorPrimary="#acb5fa"
        colorPrimaryLight="#e2e5ff"
        calendarClassName={styles.customCalander}
      />
      <div className={styles.dateContainer}>
        <input
          type="text"
          placeholder="Start date..."
          value={dateConstructor(dates.from).toDateString()}
          disabled
        />
        <input
          type="text"
          placeholder="End date..."
          value={dates.to ? dateConstructor(dates.to).toDateString() : ""}
          disabled
        />
      </div>
    </div>
  );
}
