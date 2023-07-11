import React from "react";
import styles from './AboutUs.module.css'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';



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
            <h1>Your go to hub for
                <Typewriter
                    options={{
                        strings: ['rapid deployment', 'reliable support', 'competitve pricing'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1000,
                        wrapperClassName: styles.type
                    }}
                />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore architecto ut sunt! Laboriosam, est ex dignissimos impedit quae veritatis?</p>
        </motion.div>
    )
}