import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DashboardOrder.module.css";

export default function Calendar(props) {
  const { startDate, endDate, setFormData } = props;

  const onChange = (dates) => {
    const [start, end] = dates;

    setFormData((prev) => {
      const newDatesObj = {
        start: start,
        end: end,
      };

      return {
        ...prev,
        dates: newDatesObj,
      };
    });
  };

  return (
    <div className="card">
      <div className={styles.orderFormHeadings}>
        <h2>Estimated Project Duration</h2>
        <p>Select the estimated application duration</p>
      </div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <div className={styles.dateContainer}>
        <input
          type="text"
          placeholder="Start date..."
          value={new Date(startDate).toDateString()}
          disabled
        />
        <input
          type="text"
          placeholder="End date..."
          value={endDate ? new Date(endDate).toDateString() : ""}
          disabled
        />
      </div>
    </div>
  );
}
