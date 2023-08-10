import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../templates/DashboardNav";

export default function DashboardLayout() {
  return (
    <section className="dashboard-container">
      <DashboardNav />
      <Outlet />
    </section>
  );
}
