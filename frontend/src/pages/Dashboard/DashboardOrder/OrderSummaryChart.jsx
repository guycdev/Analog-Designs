import React, { useState, useEffect } from "react";
import styles from "./DashboardOrder.module.css";

export default function OrderSummaryChart(props) {
  const { end, start } = props;

  const [orderTotal, setOrderTotal] = useState(200);
  const [displayedOrderTotal, setDisplayedOrderTotal] = useState(0);

  useEffect(() => {
    const diff = orderTotal - displayedOrderTotal;
    const step = Math.sign(diff) * 1;
    const stepsRequired = Math.abs(diff) / 1;

    for (let i = 0; i < stepsRequired; i++) {
      //Dispatch multiple setTimout functions that return at different time periods
      setTimeout(() => {
        setDisplayedOrderTotal((prev) => prev + step);
      }, i * 2);
    }
  }, [orderTotal]);

  useEffect(() => {
    function orderTotalCalculator() {
      const startDate = new Date(start);
      const endDate = new Date(end);

      let months;
      months = (startDate.getFullYear() - endDate.getFullYear()) * 12;
      months -= startDate.getMonth();
      months += endDate.getMonth();
      return months == 0 ? 1 : Math.ceil(months);
    }

    if (end) {
      const months = orderTotalCalculator();
      console.log(months);
      setOrderTotal((prev) => {
        return prev + months * 40;
      });
    }
  }, [new Date(end).toDateString()]);

  console.log(orderTotal);

  return (
    <div className={`card ${styles.chartContainer}`}>
      <h2>{displayedOrderTotal}</h2>
    </div>
  );
}
