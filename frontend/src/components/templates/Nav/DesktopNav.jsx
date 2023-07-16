import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import NavContent from './NavContent'
import MiscNavItems from './MiscNavItems'


export default function MobileNav(props) {

    const { logo, name, theme } = props
    const [scrolled, setScrolled] = useState(false)


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
        <header className="nav-container" style={
            {
                top: scrolled && window.innerWidth > 1012 ? '-0.9rem' : '0'
            }
        }
        >
            <motion.nav
                className='card desktop-nav'
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
                <NavContent
                    theme={theme}
                    style="desktop-content-container"
                />
                <MiscNavItems theme={theme} />

            </motion.nav>
        </header>
    )
}