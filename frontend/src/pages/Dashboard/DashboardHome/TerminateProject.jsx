import React from "react";
import styles from "./Dashboard.module.css";
import Button from "../../../components/Button";
import terminate from "../../../assets/terminate.svg";

export default function TerminateProject(props) {
  return (
    <div className={`card ${styles.deploymentControlBar}`}>
      <div className={styles.deploymentControlBarHeadings}>
        <h2>Manage Deployments</h2>
        <p>Safely terminate active deployments.</p>
      </div>
      <form>
        <div className={styles.formContent}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email..." />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="orderID">Order</label>
            <input type="number" id="orderID" placeholder="Your order..." />
          </div>
        </div>
        <Button
          buttonType="primary-btn"
          text="Terminate Order"
          img={terminate}
        />
      </form>
    </div>
  );
}
