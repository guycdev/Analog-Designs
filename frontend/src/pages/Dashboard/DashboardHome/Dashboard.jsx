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
    // "http://ec2-18-215-255-171.compute-1.amazonaws.com:3003/api/orders/order"
    // "http://api.local.example.com:3003/api/order/orders",

    const request = await fetch(
      "http://analogdesigns.net:3003/api/orders/order",
      {
        credentials: "include",
      }
    );

    const data = await request.json();

    console.log(typeof data.status);

    if (data.status > 205 || typeof data.status == "string") {
      return redirect("../account");
    }

    console.log("test2");
    return data;
  } catch (err) {
    return redirect("../account");
  }
}

export default function Dashboard() {
  const data = useLoaderData();

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
