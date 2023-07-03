import React from 'react'
import { motion } from 'framer-motion'

export default function Card(props) {
    const { img, heading, content, direction, id, styles, children, drag } = props

    const enterTransition = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1 + id * 0.4,
                duration: 1 + id * 0.4 ** id
            }
        }
    }

    return (
        <motion.div
            className={[
                "card-container",
                "card",
                styles ? styles : null,
            ].filter(Boolean).join(' ')}
            initial={{ opacity: 0, x: 500 }}
            animate={
                {
                    opacity: 1,
                    x: 0,
                    transition:
                    {
                        duration: 1,
                        delay: 1
                    }
                }
            }
        >
            <motion.div
                variants={enterTransition}
                initial="initial"
                animate="animate"
            >
                {img && <img src={img} alt="" />}
                {heading && <h2>{heading}</h2>}
                {content && <p>{content}</p>}
                {children && children}
            </motion.div>
        </motion.div>
    )
}