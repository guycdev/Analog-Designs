import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import orders from "./test-cases";
import x from "../../../assets/x.svg";
import checkmark from "../../../assets/check.svg";
import { ReactSVG } from "react-svg";

export default function ActiveOrders(props) {
  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const request = orders;

      return request;
    }

    async function filterOrders() {
      const data = await getOrders();
      const filteredOrders = data.filter((order) => order.user_id == 1);
      setActiveOrders(filteredOrders);
    }

    filterOrders();
  }, []);

  const elementArr = activeOrders.map((order, index) => {
    return (
      <tr
        className={`${styles.orderContainer} ${
          index % 2 == 0 ? styles.evenRow : styles.oddRow
        }`}
        key={index}
      >
        <td>{order.order_key}</td>
        <td className={styles.orderInformationCell}>{order.business_name}</td>
        <td>
          <a href={order.domain}>{order.domain}</a>
        </td>
        <td>
          <ReactSVG src={order.is_active ? checkmark : x} />
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
