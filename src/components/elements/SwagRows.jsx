import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import { ReactSVG } from 'react-svg'

export default function SwagRows(props) {

    const { icon, header, description, delay, tag } = props
    const transitionWhileHover = {
        scale: 1.1,
        transition:
        {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
    const animateDefault = {
        y: 0,
        opacity: 1,
        transition:
        {
            duration: 1.3,
            delay: delay,
            ease: 'easeInOut'
        }
    } // transition while hovering over



    return (
        <motion.div
            className='swag-row card'
            initial={{ y: 500, opacity: 0 }}
            animate={animateDefault}
            whileHover={transitionWhileHover}
        >
            <div className="row-content">
                <div>
                    <ReactSVG src={icon} beforeInjection={(svg) => {
                        svg.classList.add('swag-icon')
                    }}
                    />
                    <h2>{header}</h2>
                </div>
                {tag && <Tag
                    name={tag.name}
                    color={tag.color}
                />}
            </div>
            {description}
        </motion.div>
    )
}