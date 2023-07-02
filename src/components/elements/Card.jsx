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
                direction ? direction : null,
                (id > 1 && direction) ? "eat-up" : null,
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
            whileHover={drag &&
            {
                scale: 1.1,
                transition: {
                    duration: 0.25,
                    ease: 'easeInOut'
                }
            }
            }
            drag={drag}
            dragConstraints={{ left: -0, right: 0, top: 0, bottom: -0 }}
            dragElastic={0.5}
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