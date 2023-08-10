import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { ReactSVG } from "react-svg";
import home from "../assets/home.svg";
import grid from "../assets/grid.svg";
import brush from "../assets/brush.svg";
import dash from "../assets/dash-circle.svg";

export default function DashboardLayout() {
  return (
    <div className={styles.dashboardNavContainer}>
      <h3>Analog Designs</h3>
      <nav>
        <NavLink
          to="./"
          className={({ isActive }) => {
            return isActive ? styles.activeDashboardSelection : "";
          }}
        >
          <ReactSVG src={home} />
          Home
        </NavLink>
        <NavLink
          to="order"
          className={({ isActive }) => {
            return isActive ? styles.activeDashboardSelection : "";
          }}
        >
          <ReactSVG src={grid} />
          Place Order
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => {
            return isActive ? styles.activeDashboardSelection : "";
          }}
        >
          <ReactSVG src={brush} />
          Contact Us
        </NavLink>
      </nav>
      <div className={styles.dashboardHelpContainer}>
        <NavLink
          to="help"
          className={({ isActive }) => {
            return isActive ? styles.activeDashboardSelection : "";
          }}
        >
          Help & Information
        </NavLink>
        <NavLink to="../">
          <ReactSVG src={dash} />
          Log Out
        </NavLink>
      </div>
    </div>
  );
}
