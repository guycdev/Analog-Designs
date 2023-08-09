import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/templates/DashboardNav";

export default function DashboardLayout() {
  return (
    <section>
      <DashboardNav />
      <Outlet />
    </section>
  );
}
