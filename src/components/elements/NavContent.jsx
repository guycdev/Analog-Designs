import React, { useState, useEffect } from 'react'
import svgThemeArr from '../../assets/svgThemeArr'
import Blobs from '../elements/Blobs'
import { motion } from 'framer-motion'

export default function NavContent(props) {

    const { theme, style } = props
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    const [dark, bright] = svgThemeArr

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    function toggleTheme() {
        theme.setTheme(prev => !prev)
    }

    console.log(style)

    return (
        <div className={`nav-links ${style}`}>
            <ul>
                <div className='nav-items'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about-us">About Us</a>
                    </li>
                    <li>
                        <a href="#gallery">Our Work</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                </div>
                <motion.div
                    className='contact-container'
                    whileHover={{
                        scale: 1.1,
                        color: 'white',
                        backgroundColor: '#007BFF'
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Blobs size="small" />
                    <li className='contact'>
                        <a href="#contact">Contact Us</a>
                    </li>
                </motion.div>
            </ul>
        </div>
    )
}