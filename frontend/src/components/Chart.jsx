import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart(props) {
  const { data, rotate, title, legend } = props;

  return (
    <div>
      <Doughnut
        data={data}
        options={{
          rotation: rotate ? 55 : 0,
          responsive: true,
          plugins: {
            legend: {
              position: legend,
            },
            title: {
              display: true,
              text: title,
            },
          },
        }}
      />
    </div>
  );
}
