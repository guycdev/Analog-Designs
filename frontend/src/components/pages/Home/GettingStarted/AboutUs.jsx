import React from "react";
import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";

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
          With Analog Designs, we create online experiences that not only
          captivate and engage but also build credibility. In 2019, there were
          approximately 3.8 million Google searches conducted each minute to
          find information on local businesses. Our designs ensure that you are
          a part of that statistic, solidifying your reputation as a
          trustworthy, reliable mortgage broker.
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
      <div className={`${styles.accordionContainer} ${styles.boxEffect}`}>
        <details className={styles.boxEffect} open>
          <summary className={styles.boxEffect}>
            Instant Online Presence
          </summary>
          <p>
            We rapidly establish an online presence for your clients, bolstering
            their legitimacy in the eyes of lenders. You don't have to lift a
            finger or wait long, we have it under control.
          </p>
        </details>
        <details className={styles.boxEffect}>
          <summary className={styles.boxEffect}>Legitimacy Enhancement</summary>
          <p>
            We help create a veneer of trustworthiness for your clients by
            building professional and visually appealing websites that pass
            lenders' scrutiny with flying colors.
          </p>
        </details>

        <details className={styles.boxEffect}>
          <summary className={styles.boxEffect}>Hands-Off Process</summary>
          <p>
            You can stay focused on your core tasks while we handle all the
            technicalities. No need for you to get involved in the nitty-gritty,
            we do all the heavy lifting.
          </p>
        </details>

        <details className={styles.boxEffect}>
          <summary className={styles.boxEffect}>Fast Delivery</summary>
          <p>
            We understand the urgency involved in loan approvals. That's why we
            provide a swift service, setting up your clients' online presence
            quickly to help expedite the approval process.
          </p>
        </details>

        <details className={styles.boxEffect}>
          <summary className={styles.boxEffect}>Cost-Effective Service</summary>
          <p>
            Our solutions are designed with your budget in mind. We provide an
            affordable service that enhances your clients' approval chances
            without breaking the bank.
          </p>
        </details>
      </div>
      {/* <img src={mac} alt="" className={styles.mac} /> */}
    </motion.div>
  );
}
