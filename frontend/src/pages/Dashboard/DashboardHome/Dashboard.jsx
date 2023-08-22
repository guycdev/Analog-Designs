import React from "react";
import styles from "./Dashboard.module.css";
import FaceCard from "./FaceCard";
import ActiveOrders from "./ActiveOrders";
import OrderChart from "./DashboardChart";
import TerminateProject from "./TerminateProject";
import Chart from "../../../components/Chart";
import { useLoaderData, redirect } from "react-router-dom";

export async function loader() {
  try {
    const request = await fetch(
      "http://api.local.example.com:3003/api/order/orders",
      {
        credentials: "include",
      }
    );

    const data = await request.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default function Dashboard() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <div className="card">
        <FaceCard data={data} />
        <ActiveOrders data={data.orders} />
      </div>
      <div className={styles.dashboardActionsContainer}>
        <OrderChart />
        <div>
          <TerminateProject />
          <div className="card">
            <Chart
              data={{
                labels: ["Active Orders", "Inactive Orders"],
                datasets: [
                  {
                    label: "Count",
                    data: [10, 15],
                    backgroundColor: ["#acb5fa", "#d7d8f2"],
                    borderWidth: 2,
                  },
                ],
              }}
              legend="top"
              size={250}
            />
          </div>
        </div>
      </div>
    </>
  );
}
