import React from "react";
import styles from "./Dashboard.module.css";
import x from "../../../assets/x.svg";
import checkmark from "../../../assets/check.svg";
import { ReactSVG } from "react-svg";

export default function ActiveOrders(props) {
  const { data } = props;

  const elementArr = data.map((order, index) => {
    return (
      <tr
        className={`${styles.orderContainer} ${
          index % 2 == 0 ? styles.evenRow : styles.oddRow
        }`}
        key={index}
      >
        <td>{order.orderID}</td>
        <td className={styles.orderInformationCell}>{order.business_name}</td>
        <td>
          <a href={order.domain}>{order.domain}</a>
        </td>
        <td>
          <ReactSVG src={order.isActive ? checkmark : x} />
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.ordersContainer}>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Information</th>
            <th>Domain</th>
            <th>Active ?</th>
          </tr>
        </thead>
        <tbody>{elementArr}</tbody>
      </table>
    </div>
  );
}
