import React, { useState, useEffect } from "react";
import Chart from "../../../components/Chart";
import Button from "../../../components/Button";
import globe from "../../../assets/globe.svg";

export default function OrderSummaryChart(props) {
  const { end, start, handleSubmit } = props;

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
    <div className={`card`}>
      <Chart
        title="Order breakdown"
        rotate={true}
        data={{
          labels: ["Package base", "Hosting costs", "Domain costs"],
          datasets: [
            {
              label: "Price",
              data: [200, `${orderTotal - 200}`, 20],
              backgroundColor: ["#b6bdff", "#dddfff", "#d0d4ff"],
              borderWidth: 2,
            },
          ],
        }}
      />
      <h2 style={{ textAlign: "center" }}>
        Order total: ${displayedOrderTotal}.00
      </h2>
      <Button
        buttonType="primary-btn"
        text="Submit Order"
        img={globe}
        action={handleSubmit}
      />
    </div>
  );
}
