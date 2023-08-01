import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart(props) {
  const { data, rotate } = props;

  return (
    <div>
      <Doughnut
        data={data}
        options={{
          rotation: rotate ? 55 : 0,
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: "Consumer Online Research Habits in 2019",
            },
          },
        }}
      />
    </div>
  );
}
