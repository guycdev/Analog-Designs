import React from 'react'
import Circle from './Circle'
import { motion } from 'framer-motion'

export default function Circles() {

    return (
        <div className="color-pallet-container">
            <Circle
                color="#000000"
                delay={0.2}
            />
            <Circle
                color="#3b3b3b"
                delay={0.4}
            />
            <Circle
                color="#b1b1b1"
                delay={0.6}
            />
            <Circle
                color="#ededed"
                delay={0.8}
            />
            <Circle
                color="#f3f3f3"
                delay={1}
            />
            <Circle
                color="#fafafa"
                delay={1.2}
            />
            <Circle
                color="#ededed"
                delay={1.4}
            />
            <Circle
                color="#00588b"
                delay={1.6}
            />
            <Circle
                color="#007BFF"
                delay={1.8}
            />
            <Circle
                color="#40a1ff"
                delay={2.0}
            />
        </div>
    )
}