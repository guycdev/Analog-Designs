import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../templates/DashboardNav";

export default function DashboardLayout() {
  return (
    <main className="container dashboard-container">
      <DashboardNav />
      <Outlet />
    </main>
  );
}
