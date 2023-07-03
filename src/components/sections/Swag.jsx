import React from 'react'
import SwagRows from '../elements/SwagRows'
import Card from '../elements/Card'
import { motion } from 'framer-motion'

export default function Swag(props) {

    const { featureArr, style, tag, heading, content, id } = props

    const elementArr = featureArr.map((obj, index) => {
        return (
            <SwagRows
                key={obj.id}
                icon={obj.icon}
                header={obj.header}
                description={obj.description}
                delay={index * 0.2 + 0.1}
                tag={tag}
            />
        )
    })

    return (
        <motion.section className='feature-container' id={id}>
            {heading && <Card
                heading={heading}
                content={content}
                id={0}
                styles='fit-content'
            />}
            <div className={style}>
                {elementArr}
            </div>
        </motion.section>
    )
}