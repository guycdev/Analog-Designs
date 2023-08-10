import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { ReactSVG } from "react-svg";
import home from "../assets/home.svg";
import grid from "../assets/grid.svg";
import brush from "../assets/brush.svg";

export default function DashboardLayout() {
  return (
    <div className={styles.dashboardNavContainer}>
      <nav>
        <NavLink to="./">
          <ReactSVG src={home} />
          Home
        </NavLink>
        <NavLink to="order">
          <ReactSVG src={grid} />
          Place Order
        </NavLink>
        <NavLink to="contact">
          <ReactSVG src={brush} />
          Contact Us
        </NavLink>
      </nav>
      <div></div>
      <div className={styles.dashboardHelpContainer}>
        <NavLink to="help">Help & Information</NavLink>
        <button className={styles.dashboardButton}>Log Out</button>
      </div>
    </div>
  );
}
