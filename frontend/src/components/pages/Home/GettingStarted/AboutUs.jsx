import React from "react";
import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";
import Chart from "../../../elements/Chart";
import { checkedInternet, checkedWebsite } from "../utils/chartData";

export default function AboutUs(props) {
  return (
    <motion.div
      className={`${styles.container} card`}
      initial={{
        x: 1500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
    >
      <div className={`${styles.contentContainer} ${styles.boxEffect}`}>
        <h2>
          Meet Analog Designs - Where <span>Innovation </span>Meets{" "}
          <span>Inspiration!</span>
        </h2>
        <p className={styles.boxEffect}>
          Welcome to Analog Designs, your bridge to success in the mortgage
          industry. In a world where 85% of consumers conduct research online
          before making a purchase, and 74% turn to websites, a robust online
          presence is no longer optional; it's vital.
          <br />
          <br />
          We cater exclusively to mortgage brokers, crafting websites that lend
          credibility and distinction. Why? Because underwriters, like
          consumers, expect to find businesses online. If your brand doesn't
          appear in search results, it can raise questions about your
          reliability and even the legitimacy of your business.
          <br />
          <br />
          Trust us to bridge the gap between your online presence and
          underwriters' expectations, ensuring a seamless mortgage approval
          process.
        </p>
        <br />
        <br />
        <p className={styles.boxEffect}>
          © 2023 Analog Designs. All Rights Reserved.
        </p>
      </div>
      <div className={`${styles.chartContainer} ${styles.boxEffect}`}>
        <Chart
          data={{
            labels: checkedInternet.map((data) => data.label),
            datasets: [
              {
                label: "Checked Internet",
                data: checkedInternet.map((data) => data.data),
                backgroundColor: ["#acb5fa", "#d7d8f2"],
                borderWidth: 2,
              },
            ],
          }}
        />
        <Chart
          data={{
            labels: checkedWebsite.map((data) => data.label),
            datasets: [
              {
                label: "Checked Website",
                data: checkedWebsite.map((data) => data.data),
                backgroundColor: ["#acb5fa", "#d7d8f2"],
                borderWidth: 2,
              },
            ],
          }}
        />
      </div>
      {/* <img src={mac} alt="" className={styles.mac} /> */}
    </motion.div>
  );
}
