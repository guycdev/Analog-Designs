import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

import { Chart } from "react-chartjs-2";

import styles from "./Dashboard.module.css";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  plugins: {
    datalabels: {
      backgroundColor: (context) => {
        if (context.dataset.backgroundColor[context.dataIndex] == "#acb5fa") {
          return "#d7d8f2";
        }
        return "#b5bdff";
      },
      borderRadius: 5,
      color: "white",
      font: {
        size: 10,
      },
      formatter: Math.round,
      padding: 6,
      anchor: "start",
    },
    title: {
      display: true,
      text: "Account Analytics",
      color: "#333",
    },
  },
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
        y: {
          from: 0,
        },
      },
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "easeInQuad",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: "linear",
      position: "left",
      grid: {
        drawOnChartArea: false,
      },
    },
    y1: {
      // You can name this whatever you like
      type: "linear",
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels, // Your months
  datasets: [
    {
      type: "bar",
      data: [0, 1, 4, 1, 3, 5, 3],
      label: ["Monthly Order Count"],
      borderColor: "#d7d8f2",
      backgroundColor: "#d7d8f2",
      borderRadius: 10,
      yAxisID: "y",
    },
    {
      type: "line",
      data: [0, 484, 1286, 1502, 1750, 1975, 2110],
      label: ["Lifetime Spend"],
      borderColor: "#b5bdff",
      backgroundColor: "#b5bdff",
      yAxisID: "y1",
    },
  ],
};

export default function OrderChart() {
  return (
    <div className={`card ${styles.chartContainer}`}>
      <Chart type="bar" options={options} data={data} />
    </div>
  );
}
