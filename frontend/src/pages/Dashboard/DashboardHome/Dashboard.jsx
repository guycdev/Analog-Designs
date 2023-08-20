import React from "react";
import styles from "./Dashboard.module.css";
import FaceCard from "./FaceCard";
import ActiveOrders from "./ActiveOrders";
import OrderChart from "./DashboardChart";
import TerminateProject from "./TerminateProject";
import Chart from "../../../components/Chart";
import orders from "./test-cases";
import { useLoaderData, redirect } from "react-router-dom";

export async function loader() {
  try {
    console.log("Dashobard loader");
    const request = await fetch(
      "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
    );

    if (request.status === 401) {
      return redirect("account/login");
    }

    const data = await request.json();

    const revisedData = data[0];

    const filteredOrders = orders.filter((order) => order.user_id == 1);

    return {
      ...revisedData,
      orders: filteredOrders,
    };
  } catch (err) {
    throw new Error(err);
  }
}

export default function Dashboard() {
  const data = useLoaderData();

  const profile = {
    name: `${data["first_name"]} ${data["last_name"]}`,
    username: data.username,
    email: data.email,
    avi: data.avatar,
    orders: data.orders,
  };

  return (
    <>
      <div className="card">
        <FaceCard profile={profile} />
        <ActiveOrders data={profile.orders} />
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
            />
          </div>
        </div>
      </div>
    </>
  );
}
