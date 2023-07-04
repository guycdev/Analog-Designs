import React, { useState, useEffect } from 'react'
import svgThemeArr from '../../assets/svgThemeArr'
import Blobs from '../elements/Blobs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NavContent(props) {

    const { theme, style, setIsClicked } = props
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

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

    return (
        <div className={`nav-links ${style}`}>
            <ul>
                <div className='nav-items'>
                    <li
                        onClick={setIsClicked}
                    >
                        <a href="#home">Home</a>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <a href="#about-us">About Us</a>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <a href="#gallery">Our Work</a>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li
                        onClick={setIsClicked}
                    >
                        <a href="#contact">Contact Us</a>
                    </li>
                </div>
                <div className='account-container'>
                    <motion.li
                        className='contact-container login'
                        whileHover={{
                            scale: 1.1,
                            color: 'white',
                            backgroundColor: '#007BFF'
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Blobs size="small" />
                        <Link
                            to={'./login'}
                        >
                            Login
                        </Link>
                    </motion.li>
                    <motion.li
                        className='contact-container register'
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: 'white'
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Blobs size="small" />
                        <Link
                            to={'./register'}
                        >
                            Register
                        </Link>
                    </motion.li>
                </div>
            </ul>
        </div>
    )
}