import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function Circle(props) {
    const { color, delay } = props
    const animateDefault = {
        y: 0,
        opacity: 1,
        transition:
        {
            duration: 1.3,
            delay: 1 + delay,
            ease: 'easeInOut'
        }
    }
    return (
        <motion.div
            className="circle"
            style={{ backgroundColor: color }}
            initial={{
                y: 500,
                opacity: 0
            }}
            animate={animateDefault}
        >
        </motion.div >
    )

}