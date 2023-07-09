import React from 'react'
import Circle from './Circle'

export default function Circles() {

    return (
        <div className="color-pallet-container">
            <Circle
                color="#000000"
                delay={0.2}
            />
            <Circle
                color="#474747"
                delay={0.4}
            />
            <Circle
                color="#8f8f8f"
                delay={0.6}
            />
            <Circle
                color="#d7d7d7"
                delay={0.8}
            />
            <Circle
                color="#f3f3f3"
                delay={1}
            />
            <Circle
                color="#c8c8f0"
                delay={1.2}
            />
            <Circle
                color="#9c9ced"
                delay={1.4}
            />
            <Circle
                color="#7070ea"
                delay={1.6}
            />
            <Circle
                color="#4545e6"
                delay={1.8}
            />
            <Circle
                color="#4153ef"
                delay={2.0}
            />


        </div>
    )
}