import React from "react";
import styles from "./Dashboard.module.css";
import Button from "../../../components/Button";

export default function TerminateProject(props) {
  return (
    <div className={`card ${styles.deploymentControlBar}`}>
      <h2>Manage Deployments</h2>
      <p>Safely terminate active deployments.</p>
      <form>
        <div className={styles.formContent}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email..." />
          </div>
          <div>
            <label htmlFor="orderID">Order</label>
            <input type="number" id="orderID" placeholder="Order ID..." />
          </div>
        </div>
        <Button buttonType="primary-btn" text="Terminate Order" />
      </form>
    </div>
  );
}
