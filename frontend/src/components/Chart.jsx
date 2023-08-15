import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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
              display: title ? true : false,
              text: title,
            },
            datalabels: {
              color: "#fff",
              backgroundColor: (context) => {
                if (
                  context.dataset.backgroundColor[context.dataIndex] ==
                  "#acb5fa"
                ) {
                  return "#d7d8f2";
                }
                return "#acb5fa";
              },
              borderRadius: 10,
              anchor: "end",
              align: "start",
              offset: 10,
              font: {
                size: 14,
              },
              formatter: (value, context) => {
                return context.chart.data.labels[context.dataset.data];
              },
            },
          },
        }}
      />
    </div>
  );
}
