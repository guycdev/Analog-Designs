import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import close from '../../assets/close.svg'
import NavContent from './NavContent'
import MiscNavItems from './MiscNavItems'
import { motion } from 'framer-motion'

export default function MobileNav(props) {

    const navVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: "-100%", opacity: 0 },
    };

    const { logo, name, theme } = props

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(prev => !prev)
    }

    return (
        <header>
            <div className="burger-icon" onClick={handleClick} style={{ opacity: isClicked ? '0' : '1' }}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <motion.nav
                className='mobile-nav'
                animate={isClicked ? "open" : "closed"}
                initial="closed"
                variants={navVariants}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <ReactSVG
                    src={close}
                    onClick={() => handleClick()}
                    beforeInjection={(svg) => {
                        svg.classList.add('close-btn')
                    }}
                />
                <div className="logos">
                    <img src={logo} alt="Analog Studio Logo" />
                    <h3 className='logo'>{name}</h3>
                </div>
                <MiscNavItems theme={theme} />
                <hr />
                <NavContent
                    theme={theme}
                    style="mobile-content-container"
                />
            </motion.nav>
            <div
                className="nav-overlay"
                style={{ display: isClicked ? 'block' : 'none' }}
                onClick={handleClick}
            ></div>
        </header>
    )
}