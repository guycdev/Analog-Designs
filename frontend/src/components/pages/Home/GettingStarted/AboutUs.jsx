import React from "react";
import styles from './AboutUs.module.css'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import iphone from '../../../../assets/iPhone 12 Pro.png'
import mac from '../../../../assets/Macbook Pro.png'



export default function AboutUs() {

    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });

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
            <div className={styles.contentContainer}>
                <h1>Your go to hub for
                    <Typewriter
                        options={{
                            strings: ['deployment', 'support', 'deals'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1000,
                            wrapperClassName: styles.type
                        }}
                    />
                </h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem beatae. Aliquam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem beatae. Aliquam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem beatae. Aliquam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem beatae. Aliquam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem beatae. Aliquam.</li>
                </ul>
            </div>
            <div className={styles.imgContainer}>
                <img src={iphone} alt="" className={styles.iphone} />
                <img src={mac} alt="" className={styles.mac} />
            </div>
        </motion.div>
    )
}