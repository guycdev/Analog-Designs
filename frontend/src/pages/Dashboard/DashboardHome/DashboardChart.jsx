import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./Dashboard.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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
  plugins: {
    title: {
      display: true,
      text: "Account Analytics",
      color: "#333",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Count of Orders",
      data: [0, 2, 6, 7, 11, 12, 13],
      borderColor: "#d7d8f2",
      backgroundColor: "#d7d8f2",
      yAxisID: "y",
    },
    {
      label: "Sum of Cost of Orders",
      data: [0, 484, 1286, 1502, 1750, 1975, 2110],
      borderColor: "#b5bdff",
      backgroundColor: "#b5bdff",
      yAxisID: "y1",
    },
  ],
};

export default function OrderChart() {
  return (
    <div className={`card ${styles.chartContainer}`}>
      <Line options={options} data={data} />
    </div>
  );
}
