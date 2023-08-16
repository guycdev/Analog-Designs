import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { ReactSVG } from "react-svg";
import home from "../../assets/home.svg";
import grid from "../../assets/grid.svg";
import send from "../../assets/send.svg";
import dash from "../../assets/dash-circle.svg";
import info from "../../assets/info.svg";
import testimonials from "../../assets/testimonials.svg";

export default function DashboardLayout() {
  return (
    <div className={styles.dashboardNavContainer}>
      <h3>Analog Designs</h3>
      <nav>
        <div>
          <NavLink
            to="."
            end
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
            <ReactSVG src={send} />
            Testimonials & Support
          </NavLink>
        </div>
        <div className={styles.dashboardHelpContainer}>
          <NavLink
            to="help"
            className={({ isActive }) => {
              return isActive ? styles.activeDashboardSelection : "";
            }}
          >
            <ReactSVG src={info} />
            Help & Information
          </NavLink>
          <NavLink to="../">
            <ReactSVG src={dash} />
            Log Out
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
