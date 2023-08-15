import React, { useState, useEffect } from "react";
import styles from "./DashboardOrder.module.css";
import Chart from "../../../components/Chart";

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
      setOrderTotal(200 + months * 40);
    } else {
      setOrderTotal(200);
    }
  }, [new Date(end).toDateString()]);

  return (
    <div className={`card `}>
      <p>Order breakdown based on package and duration</p>
      <Chart
        title="Order Summary"
        data={{
          labels: ["Package base", "Hosting costs"],
          datasets: [
            {
              label: "Price",
              data: [200, orderTotal - 200],
              backgroundColor: ["#acb5fa", "#d7d8f2"],
              borderWidth: 2,
            },
          ],
        }}
      />
      <h2>Order total: ${displayedOrderTotal}.00</h2>
    </div>
  );
}
