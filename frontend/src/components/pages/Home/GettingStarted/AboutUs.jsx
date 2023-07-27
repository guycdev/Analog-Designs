import React from "react";
import styles from './AboutUs.module.css'
import { motion } from 'framer-motion'
import mac from '../../../../assets/Macbook.png'



export default function AboutUs(props) {


    return (
        <motion.div
            className={`${styles.container} card`}
            initial={{
                x: 1500,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 2
                }
            }}
        >
            <div className={`${styles.contentContainer} ${styles.boxEffect}`}>
                <h2>Meet Analog Designs - Where <span>Innovation </span>Meets <span>Inspiration!</span></h2>
                <p className={styles.boxEffect}>
                    Welcome to Analog Designs, where we breathe life into your digital presence. Our focus? It’s simple. We cater to mortgage brokers, crafting exceptional websites that lend credibility and distinction to our clients.
                    <br />
                    <br />
                    We've learned that every client's needs are unique and every borrower is different, but there's one universal truth: credibility is key. That's where we come in. By leveraging years of design expertise and a deep understanding of the mortgage industry, we create online experiences that not only captivate and engage but also solidify your reputation as a trustworthy, reliable mortgage broker.
                    <br />
                    <br />
                    No matter the project's scope, our team is dedicated to delivering designs that are not only aesthetically pleasing but also functionally effective, ensuring that your website is a reflection of your commitment to your clients.
                </p>
                <br />
                <br />
                <p className={styles.boxEffect}>
                    © 2023 Analog Designs. All Rights Reserved.
                </p>
            </div>
            <div className={`${styles.accordionContainer} ${styles.boxEffect}`}>
                <details classname={styles.boxEffect} open>
                    <summary classname={styles.boxEffect}>Instant Online Presence</summary>
                    <p>We rapidly establish an online presence for your clients, bolstering their legitimacy in the eyes of lenders. You don't have to lift a finger or wait long, we have it under control.</p>
                </details>
                <details classname={styles.boxEffect}>
                    <summary classname={styles.boxEffect}>Legitimacy Enhancement</summary>
                    <p>We help create a veneer of trustworthiness for your clients by building professional and visually appealing websites that pass lenders' scrutiny with flying colors.</p>
                </details>

                <details classname={styles.boxEffect}>
                    <summary classname={styles.boxEffect}>Hands-Off Process</summary>
                    <p>You can stay focused on your core tasks while we handle all the technicalities. No need for you to get involved in the nitty-gritty, we do all the heavy lifting.</p>
                </details>

                <details classname={styles.boxEffect}>
                    <summary classname={styles.boxEffect}>Fast Delivery</summary>
                    <p>We understand the urgency involved in loan approvals. That's why we provide a swift service, setting up your clients' online presence quickly to help expedite the approval process.</p>
                </details>

                <details classname={styles.boxEffect}>
                    <summary classname={styles.boxEffect}>Cost-Effective Service</summary>
                    <p>Our solutions are designed with your budget in mind. We provide an affordable service that enhances your clients' approval chances without breaking the bank.</p>
                </details>
            </div>
            {/* <img src={mac} alt="" className={styles.mac} /> */}
        </motion.div>
    )
}