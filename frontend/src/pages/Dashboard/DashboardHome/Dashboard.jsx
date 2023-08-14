import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import FaceCard from "./FaceCard";
import ActiveOrders from "./ActiveOrders";
import OrderChart from "./DashboardChart";
import TerminateProject from "./TerminateProject";
import Chart from "../../../components/Chart";

export default function Dashboard() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getProfile() {
      try {
        const request = await fetch(
          "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
        );
        const data = await request.json();

        const revisedData = data[0];

        setProfile((prev) => {
          return {
            ...prev,
            name: `${revisedData["first_name"]} ${revisedData["last_name"]}`,
            username: revisedData.username,
            email: revisedData.email,
            avi: revisedData.avatar,
          };
        });
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
  }, []);

  return (
    <>
      <div className="card">
        <FaceCard profile={profile} />
        <ActiveOrders />
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
    // <div className={styles.dashboardContainer}>
    //   <div className="card">
    //     <FaceCard profile={profile} />
    //     <ActiveOrders />
    //   </div>
    //   <div className={styles.dashboardActionsContainer}>
    //     <OrderChart />
    //     <TerminateProject />
    //   </div>
    // </div>
  );
}
