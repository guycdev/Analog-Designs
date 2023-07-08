import React from "react";
import { motion } from 'framer-motion'
import { ReactSVG } from 'react-svg';
import styles from './Button.module.css'


export default function Button(props) {
    const { buttonType, text, img, messageStatus } = props

    const blue = {
        backgroundColor: '#4153ef',
        color: '#FFFFFF'
    }


    const grey = {
        backgroundColor: '#ededed',
        color: '#000000'
    }

    const isLoading = messageStatus == 'loading'

    return (
        <div className={styles.btnContainer}>
            <motion.button
                className={styles[buttonType]}
                whileHover={
                    buttonType == "primaryBtn" ?
                        grey :
                        blue
                }
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {text}
                {!isLoading && img && <ReactSVG src={img} />}
                {isLoading && <div class="loader"></div>}
            </motion.button>
        </div>
    )
}