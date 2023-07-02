import React, { useState, useEffect } from 'react'
import svgThemeArr from '../../assets/svgThemeArr'
import Blobs from '../elements/Blobs'
import { motion } from "framer-motion"


export default function Nav(props) {
    const { logo, name, theme } = props
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    const [dark, bright] = svgThemeArr
    const [scrolled, setScrolled] = useState(false)

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

    useEffect(() => {
        const onScroll1 = () => {
            setScrolled(true);
        };

        const onScroll2 = () => {
            if (window.scrollY < 20) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll1);
        window.addEventListener('scroll', onScroll2);

        return () => {
            window.removeEventListener('scroll', onScroll1);
            window.removeEventListener('scroll', onScroll2);
        };
    }, [])

    return (
        <header className="nav-container" style={{ top: scrolled ? '-0.9rem' : '0' }}>
            <motion.nav
                className='card'
                initial={{
                    y: -500,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.9
                    }
                }}
            >
                <div className="logos">
                    <img src={logo} alt="Analog Studio Logo" />
                    <h3 className='logo'>{name}</h3>
                </div>
                <div className="vertical-line"></div>
                <div className="nav-links">
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
                <div className="misc-container">
                    <p className='region'><em>ON, CA </em><span className='grey'>{`${time}`}</span></p>
                    <button onClick={toggleTheme} className='button-theme'>
                        {theme.theme ? bright : dark}
                    </button>
                </div>
            </motion.nav>
        </header>
    )
}