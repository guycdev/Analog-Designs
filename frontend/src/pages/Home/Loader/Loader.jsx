import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'

export default function Loader(props) {


    const elementArr = []
    for (let i = 0; i < props.length; i++) {
        elementArr.push(
            <motion.div
                key={i}
                className={`loading-objects ${i % 2 == 0 ? "loading-even" : "loading-odd"}`}
                initial={{ y: 0 }}
                animate={
                    {
                        y: [-90, 90, -90],
                        transition: {
                            repeat: Infinity,
                            delay: 0.25 * i,
                            duration: 1.5
                        }
                    }
                }
            >
            </motion.div>
        )
    }


    return (
        <div id="page-loader" className={props.loading ? 'show' : 'hide'}>
            <div className="page-loader-container">
                {elementArr}
            </div>
        </div >
    )
}